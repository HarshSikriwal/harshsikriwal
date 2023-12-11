import Header from "@/components/Header";
import Image from "next/image";
import RoundImage from "../public/Ellipse1.png";
import MyPhoto from "../public/myphoto.png";
import Link from "next/link";
import SocialHandles from "@/components/SocialHandles";

export default function Home() {
  return (
    <div className="min-h-[75vh] flex gap-16 items-center flex-col lg:flex-row">
      <div className="hidden lg:flex flex-col gap-8 ">
        <Header className="name-main " />
        <div className="hidden lg:block">
          <p className="w-2/3 text-2xl font-medium text-secondary-color mb-10">
            {`I'm a passionate web developer and recent graduate who thrives on the
          fields of football and Hindi poetry. I live by the motto: "Life is an
          adventure waiting to be explored." Also trying to be a bookworm cause
          it sounds geeky.`}
          </p>
          <Link href={"/contact"} className="w-full">
            <button className="border-2 px-4 py-2 border-secondary-color bg-white text-black rounded-xl font-bold hover:scale-105 active:scale-95 hover:border-primary-color hover:text-primary-color ">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
      <div className="w-fit h-fit flex justify-center items-center relative">
        <div className="absolute bg-[#617656] w-4/5 h-4/5 top-12 -z-20 blur-3xl rounded-full"></div>
        <div>
          <Image
            className="rounded-full p-4 md:p-32 lg:p-0"
            src={MyPhoto}
            alt="profile image"
            width={750}
          />
          <SocialHandles />
        </div>
      </div>
      <div className="flex flex-col gap-6 mb-6 lg:hidden">
        <Header className="text-center" />
        <div className="w-full flex flex-col lg:hidden">
          <p className="text-xl font-semibold text-secondary-color mx-1 mb-8">
            {`I'm a passionate web developer and recent graduate who thrives on the
          fields of football and Hindi poetry. I live by the motto: "Life is an
          adventure waiting to be explored." Also trying to be a bookworm cause
          it sounds geeky.`}
          </p>

          <Link href={"/contact"} className="w-full">
            <button className="border-2 px-2 py-1 border-secondary-color bg-white text-black rounded-xl font-bold hover:scale-105 active:scale-95 hover:border-primary-color hover:text-primary-color ">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
