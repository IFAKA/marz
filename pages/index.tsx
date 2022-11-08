import { mars_src } from "models";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Image
        priority
        unoptimized
        loader={() => mars_src}
        src={mars_src}
        width={300}
        height={300}
        alt={`NASA Logo`}
        className="mx-auto my-8"
      />
      <Link href="/rover" className="dark:hover:bg-stone-800 dark:hover:text-white px-6 py-2 dark:text-white hover:bg-gray-100 text-gray-500 border-y border-x rounded-md border-gray-200 text-center">See photos</Link>
    </div>
  )
}
