import Header from "@/components/Header";
import Image from "next/image";
import RoundImage from "../public/Ellipse1.png";
import MyPhoto from "../public/myphoto.png";

export default function Home() {
  return (
    <div className="min-h-[75vh] flex justify-between items-center">
      <div className="flex flex-col gap-8">
        <Header className="name-main" />
        <div>
          <p className="w-2/3 text-2xl sub-font mb-10">
            {`I'm a passionate web developer and recent graduate who thrives on the
          fields of football and Hindi poetry. I live by the motto: 'Life is an
          adventure waiting to be explored.' Also trying to be a bookworm cause
          it sounds geeky.`}
          </p>
          <button className="rounded-xl border px-8 py-3 sub-font hover:text-white active:scale-90">
            Get in Touch
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
