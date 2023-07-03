import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold text-blue-600">
          Hi, I'm Keshav Juneja
        </h1>

        <p className="text-2xl mt-4">
          I'm web developer and designer based in India
        </p>

        <div className="flex mt-8 space-x-4">
          <Link
            href="/KeshavResume.pdf"
            target={"_blank"}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
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

        <div className="mt-12 grid grid-cols-3 gap-4"></div>
      </main>
    </div>
  );
}
