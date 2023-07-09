import { TypewriterComponent } from "@/components/HomeComponents/TypeWriter";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" ">
      <TransitionEffect text="Home Page" />"
      <TypewriterComponent />
      <main className="flex flex-col items-center justify-center md:mt-10 ml-0 md:ml-10">
        <div className="xl:-mt-16 mt-32 ml-12 lg:-mt-14 md:-mt-8">
          <span className="text-5xl">
            <p className="font-thin">
              I know the opening line was cringe,
              <br /> but Hi, my name is
            </p>{" "}
            <span className="text-pink-300">Keshav Juneja</span>
          </span>
        </div>
        <div className="flex mt-8 space-x-4 mb-9">
          <Link
            href="/KeshavResume.pdf"
            target={"_blank"}
            className="bg-pink-300 z-10 text-white px-4 py-2 rounded-lg hover:bg-pink-500"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Contact me
          </Link>
        </div>
      </main>
    </div>
  );
}
