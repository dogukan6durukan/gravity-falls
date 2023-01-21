import Wrapper from "./Wrapper";
import Link from "next/link";

import SyntaxHighlighter from "react-syntax-highlighter";

import { Routes } from "../types/routeTypes";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type Route = Routes["server"];

const route: Route = {
  base: `${process.env.NEXT_PUBLIC_BASE_URL}/api/`,
  allCharacters: `${process.env.NEXT_PUBLIC_BASE_URL}/api/characters`,
  singleCharacter: `${process.env.NEXT_PUBLIC_BASE_URL}/api/characters/3`,
  filterByOne: `${process.env.NEXT_PUBLIC_BASE_URL}/api/characters?name=mabel`,
  filterByNameAndEpisode: `${process.env.NEXT_PUBLIC_BASE_URL}/api/characters?name=dipper&episode=tourist`,
  paginateByOne: `${process.env.NEXT_PUBLIC_BASE_URL}/api/characters?take=5`,
  paginateAllCharacters: `${process.env.NEXT_PUBLIC_BASE_URL}/api/characters?take=8&skip=70`,
};

const routeResults: Route = {
  base: `{"characters":"${process.env.NEXT_PUBLIC_BASE_URL}/api/characters"}`,
  allCharacters: `[
    {
      "id":1,
      "name":"8 Ball",
      "image":"https://static.wikia.nocookie.net/gravityfalls/images/a/a2/Opening_8_ball.jpg/",
      "quote":"So, you wanna eat him, or, something?",
      "episode":"The Last Mabelcorn"
    },
    ...
 ]
  `,
  singleCharacter: `{
    "id":3,
    "name":"Agent Powers",
    "image":"https://static.wikia.nocookie.net/gravityfalls/images/c/c5/S2e1_agent_powers.png/",
    "quote":"Then we'll make them believe us. This is the town we've been searching for.",
    "episode":"Scary-oke"
},
  `,

  filterByOne: `[
    {
      "id":7,
      "name":"Anti-Mabel",
      "image":"https://static.wikia.nocookie.net/gravityfalls/images/c/c6/AntiMabel5.jpeg",
      "quote":"The exact kind of Mabel you aren’t. And considering how easy it was for me to guess this, you’ll probably never figure it out.",
      "episode":"Gravity Falls: Lost Legends"
    },
    {
      "id":85,
      "name":"Mabel Pines",
      "image":"https://static.wikia.nocookie.net/gravityfalls/images/b/b2/S1e3_mabel_new_wax_figure.png/",
      "quote":"When life gives you lemons, draw faces on those lemons and wrap them in a blanket. 
      Ta-daaa! Now you have lemon babies.",
      "episode":"Tourist Trapped"
    }
]
`,

  filterByNameAndEpisode: `[
    {
      "id":38,
      "name":"Dipper Pines",
      "image":"https://static.wikia.nocookie.net/gravityfalls/images/c/cb/S1e16_dipper_will_take_room.png/",
      "quote":"When life gives you lemons, extract the juice and use it to draw a treasure map in invisible ink. That really works! Seriously!",
      "episode":"Tourist Trapped"
    }
]
  `,
  paginateByOne: `[
    {
       "id":1,
       "name":"8 Ball",
       "image":"https://static.wikia.nocookie.net/gravityfalls/images/a/a2/Opening_8_ball.jpg",
       "quote":"So, you wanna eat him, or, something?",
       "episode":"The Last Mabelcorn"
    },
    {
       "id":2,
       "name":"Abuelita",
       "image":"https://static.wikia.nocookie.net/gravityfalls/images/c/c5/S1e20_Soos_grandma.png/",
       "quote":"Soos' life is my soap opera.",
       "episode":"Gideon Rises"
    }
    3 More...
]
`,

  paginateAllCharacters: `[
    {
       "id":71,
       "name":"Hectorgon",
       "image":"https://static.wikia.nocookie.net/gravityfalls/images/0/0b/Opening_hectorgon.png/",
       "quote":"Spin the person! Spin the person! Spin the person!",
       "episode":"Weirdmageddon Part 1"
    },
    {
       "id":72,
       "name":"Hot Elf",
       "image":"//static.wikia.nocookie.net/gravityfalls/images/f/f5/S2e13_hot_elf_2.jpg",
       "quote":"The game is like, over. Excelsi-whatever.",
       "episode":"Dungeons, Dungeons, and More Dungeons"
    },
    6 More...
] `,
};

export default function Documentation() {
  return (
    <Wrapper className="sm:w-3/4 sm:px-0 px-6 m-auto space-y-16 py-5 [&>div>h2]:heading sm:[&>div>*]:paragraph [&>div>*]:my-2">
      <h1 className="sm:text-4xl text-3xl text-stone-700 font-bold">
        Documentation
      </h1>

      <div>
        <h2>Introduction</h2>
        <p>
          This documentation will show you to how to get the resources of the
          Gravity Falls API and how to query them in different ways.
        </p>
      </div>

      <div>
        <h2>REST</h2>
        <strong>Base url : </strong>
        <a href={route.base!} className="link" target="_blank">
          {route.base!}
        </a>
        <p>
          The base url contains about all available API endpoints. All requests
          are the <code className="code-badge">GET</code> requests and responses
          will return data in <code className="code-badge">json</code> format.
        </p>
        <div>
          <div className="flex whitespace-nowrap space-x-2 sm:overflow-auto overflow-scroll sm:text-lg px-4 py-1 bg-black rounded-t">
            <p className="text-green-400">GET</p>
            <p className="text-slate-400">{route.base}</p>
          </div>
          <SyntaxHighlighter
            language="json"
            style={dracula}
            customStyle={{ padding: "1rem", fontSize: "16px" }}
          >
            {routeResults.base!}
          </SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h2>Characters</h2>
        <p>There is a total of <code className="code-badge">143</code> characters listed by id.</p>
      </div>

      <div>
        <h2>Characters schema</h2>
        <table className="table w-full text-left text-gray-500">
          <thead className="border-b">
            <tr className="[&>*]:px-2 [&>*]:py-1">
              <th>Key</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody className="[&>tr>td]:px-2 [&>tr>td]:py-3 [&>*]:border-b">
            <tr>
              <td>id</td>
              <td>Int</td>
              <td>The id of the character.</td>
            </tr>

            <tr>
              <td>name</td>
              <td>String</td>
              <td>The name of the character.</td>
            </tr>

            <tr>
              <td>image</td>
              <td>String(url)</td>
              <td>The image url of character.</td>
            </tr>

            <tr>
              <td>quote</td>
              <td>String</td>
              <td>Common quote of character</td>
            </tr>

            <tr>
              <td>episode</td>
              <td>String</td>
              <td>Indicates that in which episode that character appeared.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="">
        <h2>Get All Characters</h2>
        <p>
          You can access the list of characters by using <code className="code-badge">/character</code> endpoint.
        </p>
        <div>
          <div className="flex whitespace-nowrap space-x-2 sm:overflow-auto overflow-scroll sm:text-lg px-4 py-1 bg-black rounded-t">
            <p className="text-green-400">GET</p>
            <p className="text-slate-400">{route.allCharacters}</p>
          </div>
          <SyntaxHighlighter
            language="json"
            style={dracula}
            customStyle={{ padding: "1rem", fontSize: "16px" }}
          >
            {routeResults.allCharacters!}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="">
        <h2>Get A Single Character</h2>
        <p>
          You can get a single character by adding the <code className="code-badge">id</code> as a parameter: <code className="code-badge">/character/3</code> endpoint.
        </p>
        <div>
          <div className="flex whitespace-nowrap space-x-2 sm:overflow-auto overflow-scroll sm:text-lg px-4 py-1 bg-black rounded-t">
            <p className="text-green-400">GET</p>
            <p className="text-slate-400">{route.singleCharacter}</p>
          </div>
          <SyntaxHighlighter
            language="json"
            style={dracula}
            customStyle={{ padding: "1rem", fontSize: "16px" }}
          >
            {routeResults.singleCharacter!}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="">
        <h2>Filter Chracters</h2>
        <p>
          You can get a characters by filtering their <code className="code-badge">name</code> as a parameter: <code className="code-badge">/characters?name=mabel</code> endpoint.
          This will return a piece of characters that names are including
          mabel.
        </p>
        <div>
          <div className="flex whitespace-nowrap space-x-2 sm:overflow-auto overflow-scroll sm:text-lg px-4 py-1 bg-black rounded-t">
            <p className="text-green-400">GET</p>
            <p className="text-slate-400">{route.filterByOne}</p>
          </div>
          <SyntaxHighlighter
            language="json"
            style={dracula}
            customStyle={{ padding: "1rem", fontSize: "16px" }}
          >
            {routeResults.filterByOne!}
          </SyntaxHighlighter>
          <p>
            Furthermore you can filter a characters by just using their <code className="code-badge">epsiode</code> names : <code className="code-badge">/characters?episode=tourist</code>
            endpoint.
          </p>
        </div>
      </div>

      <div className="">
        <h2>Filter Characters By Using Multiple Queries</h2>
        <p>
        <p>
          You can get a characters by filtering their <code className="code-badge">name</code> and <code className="code-badge">episode</code> as a parameter: <code className="code-badge">/characters?name=dipper&episode=tourist</code> endpoint.
          This will return a piece of characters that names are including
          mabel.
        </p>
        </p>
        <div>
          <div className="flex whitespace-nowrap space-x-2 sm:overflow-auto overflow-scroll sm:text-lg px-4 py-1 bg-black rounded-t">
            <p className="text-green-400">GET</p>
            <p className="text-slate-400">{route.filterByNameAndEpisode}</p>
          </div>
          <SyntaxHighlighter
            language="json"
            style={dracula}
            customStyle={{ padding: "1rem", fontSize: "16px" }}
          >
            {routeResults.filterByNameAndEpisode!}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="">
        <h2>Paginate Chracters</h2>
        <p>
          You can get a characters by limiting incoming character by using <code className="code-badge">take</code> as a parameter: <code className="code-badge">/characters?take=5</code> endpoint. This
          will return a 5 related characters insted of taking all characters.
        </p>
        <div>
          <div className="flex whitespace-nowrap space-x-2 sm:overflow-auto overflow-scroll sm:text-lg px-4 py-1 bg-black rounded-t">
            <p className="text-green-400">GET</p>
            <p className="text-slate-400">{route.paginateByOne}</p>
          </div>
          <SyntaxHighlighter
            language="json"
            style={dracula}
            customStyle={{ padding: "1rem", fontSize: "16px" }}
          >
            {routeResults.paginateByOne!}
          </SyntaxHighlighter>
          Furthermore you can <code className="code-badge">skip</code> to intented characters list by using the character id. <code className="code-badge">/characters?skip=70</code>
          endpoint.
        </div>
      </div>

      <div className="">
        <h2>Paginate Characters By Using Multiple Queries</h2>
        <p>
          You can also paginate characters by using <code className="code-badge">take</code> and <code className="code-badge">skip</code> as a parameter: <code className="code-badge"> /characters?take=8&skip=70</code>
          endpoint. This will return a piece of characters that start listing from 70. id and limited by 8 characters.
        </p>
        <div>
          <div className="flex whitespace-nowrap space-x-2 sm:overflow-auto overflow-scroll sm:text-lg px-4 py-1 bg-black rounded-t">
            <p className="text-green-400">GET</p>
            <p className="text-slate-400">{route.paginateAllCharacters}</p>
          </div>
          <SyntaxHighlighter
            language="json"
            style={dracula}
            customStyle={{ padding: "1rem", fontSize: "16px" }}
          >
            {routeResults.paginateAllCharacters!}
          </SyntaxHighlighter>
        </div>
      </div>
    </Wrapper>
  );
}
