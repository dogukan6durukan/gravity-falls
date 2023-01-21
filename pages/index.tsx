import { PrismaClient } from "@prisma/client";
import { Characters } from "@prisma/client";

import Main from "../components/Main";
import SampleDatas from "../components/SampleDatas";

const client = new PrismaClient();

export default function Home({ sample_datas }: { sample_datas: Characters[] }) {

  return (
    <div>
      <Main />
      <SampleDatas datas={sample_datas} />
    </div>
  );
}

export async function getStaticProps() {
  const sample_datas: Characters[] = await client.characters.findMany({
    take: 6,
    skip: 0,
  });

  return {
    props: {
      sample_datas,
    },
  };
}
