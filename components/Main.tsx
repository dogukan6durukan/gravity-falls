import Wrapper from "./Wrapper"
import Link from "next/link"

export default function Main() {
    return(
        <Wrapper className="bg-stone-800 space-y-5 md:flex lg:justify-around py-8 items-center">
            
            <div className="basis-1/2 px-8 space-y-5">
                <h1 className="sm:text-4xl text-3xl  font-bold text-orange-300">The Gravity Falls API</h1>
                <p className="text-slate-200 sm:text-lg text-base">Gravity Falls API is an open source project that is built for entartainment intents.</p>
                <Link href="/documentation" className="bg-white inline-block text-black px-5 py-1.5 duration-200 rounded-full">Learn More</Link>
            </div>

            <div className="lg:basis-1/3 basis-1/2 lg:px-0 px-8">
                <img src="image.jpg" />
            </div>


        </Wrapper>

    )
}