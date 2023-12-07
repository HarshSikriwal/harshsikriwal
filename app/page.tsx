import Header from "@/components/Header";
import Image from "next/image";
import RoundImage from "../public/Ellipse1.png";
import MyPhoto from "../public/myphoto.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[75vh] flex gap-16 items-center flex-col md:flex-row">
      <div className="hidden md:flex flex-col gap-8 ">
        <Header className="name-main " />
        <div className="hidden md:block">
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
      <div className="w-fit h-fit flex justify-center items-center relative">
        <div className="absolute bg-[#617656] w-4/5 h-4/5 top-12 -z-20 blur-3xl rounded-full"></div>
        <Image
          className="rounded-full"
          src={MyPhoto}
          alt="profile image"
          width={750}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-col gap-8 mb-6 md:hidden">
        <Header className="text-center" />
        <div className="w-full md:hidden">
          <p className="text-2xl font-medium text-secondary-color mb-10">
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
    </div>
  );
}
