import * as cheerio from "cheerio";
import axios from "axios";
import { Prisma, PrismaClient } from "@prisma/client";

type characters = Array<string>;

const client = new PrismaClient();

async function getCharacterInfo(
  characterName: string
): Promise<Prisma.CharactersCreateInput> {
  const { data } = await axios.get(
    `https://gravityfalls.fandom.com/wiki/${characterName}`
  );

  const $ = cheerio.load(data);

  const name = $("h2[data-source=name] > div").text();
  const scrapedImage = $(".image.image-thumbnail > img").attr("src") as string;
  const episode = $("div[data-source=first] > div > a").text();
  const scrapedQuote = $("div[data-source=quote] > div").text();

  let characterInfo: Prisma.CharactersCreateInput;

  if (
    name !== "" &&
    episode !== "" &&
    scrapedImage !== "" &&
    scrapedQuote !== ""
  ) {
    // * Added Regex for taking corresponding images
    const regEx = new RegExp("/.+(?:\.jpe?g)|.+(?:\.png)/");
    const result = regEx.exec(scrapedImage);

    const image = result?.[0];

    // * Some default regex explantions for scrapped datas
    const quote = scrapedQuote.replace(/(?:^|\W)([0-9]+)(?:$|\W)/g, "");

    characterInfo = {
      name: name,
      image: image,
      quote: quote,
      episode: episode,
    };
  
  }

  return characterInfo!;

}

async function scrapeData() {
  const URL = "https://gravityfalls.fandom.com/wiki/Category:Characters";

  try {
    const { data } = await axios.get(URL);
    const $ = cheerio.load(data);

    // * Take name values and put _ for empty spaces
    const regex = new RegExp("^((?!Category).)*$");
    const names: characters = $(".category-page__member-link")
      .map((i, a) => $(a).text().replace(/(\s)/g, "_"))
      .toArray();

    const newNames = names.filter((text) => text.match(regex));

    const characterInfoArr: Prisma.CharactersCreateInput[] = [];

    for (let i = 0; i < newNames.length; i++) {
      const characterInfo = await getCharacterInfo(newNames[i]);
      characterInfoArr.push(characterInfo);
    }

    const filteredArr = characterInfoArr.filter((val) => val !== undefined);

    await client.characters.createMany({ data : filteredArr });

  } catch (err) {
    console.log(err);
  }
}

scrapeData();

