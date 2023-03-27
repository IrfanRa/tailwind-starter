import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center bg-emerald-500">
      <div className="mx-4 order-last">
        <Image
          src="/logo.jpg"
          alt="musicImage"
          width={100}
          height={100}
        ></Image>
      </div>
      <div className="text-3xl self-center text-center">
        <h1 className="text-6xl font-bold text-zinc-200">IRFAN RASHEED</h1>
        <h2 className="text-3xl font-bold text-gray-50">Learning Web 3.0 & Meta Verse!</h2>
        <button className="my-4 px-4 py-2 border-2 border-black rounded-lg
text-white bg-blue-900">Learn More</button>
      </div>
    </div>
  );
}
