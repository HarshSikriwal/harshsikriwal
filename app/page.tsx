import Header from "@/components/Header";
import Image from "next/image";
import RoundImage from "../public/Ellipse1.png";
import MyPhoto from "../public/myphoto.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[75vh] flex justify-between items-center px-32 ">
      <div className="flex flex-col gap-8">
        <Header className="name-main" />
        <div className="">
          <p className="w-2/3 text-2xl font-medium text-secondary-color mb-10">
            {`I'm a passionate web developer and recent graduate who thrives on the
          fields of football and Hindi poetry. I live by the motto: 'Life is an
          adventure waiting to be explored.' Also trying to be a bookworm cause
          it sounds geeky.`}
          </p>
          <button className="border-2 px-4 py-2 border-secondary-color text-secondary-color rounded-lg hover:scale-105 active:scale-95 hover:border-primary-color hover:text-primary-color ">
            <Link href={"/contact"} className="w-full">
              Get in Touch
            </Link>
          </button>
        </div>
      </div>
      <Image
        className="rounded-full"
        src={MyPhoto}
        alt="profile image"
        width={320}
      />
    </div>
  );
}
