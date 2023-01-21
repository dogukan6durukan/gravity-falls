import { Characters } from "@prisma/client";

export default function SampleDatas({ datas }: { datas: Characters[] }) {
  return (
    <div className="bg-[#2c2c2c] lg:flex px-5 py-8 flex-wrap justify-evenly text-white">
      {datas.map((b) => (
        <div
          key={b.id}
          className="bg-[#464646] rounded items-center lg:w-2/5 sm:flex my-5"
        >
          <div>
            <img src={b.image!} className="w-full h-[170px] rounded"></img>
          </div>
          <div className="px-5 py-3">
            <a
              href={`/api/characters/${b.id}`}
              target="_blank"
              className="sm:text-2xl text-2xl font-bold hover:text-orange-300"
            >
              {b.name}
            </a>
            <p className="my-2"><a href={`/api/characters?episode=${b.episode}`}><span className="text-slate-400">Episode :</span> {b.episode}</a></p>
          </div>
        </div>
      ))}
    </div>
  );
}
