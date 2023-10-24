import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <div className="h-full flex flex-col justify-center gap-56">
        <Header className="name-main" />
        <p className="w-2/5 text-3xl">
          I'm a passionate web developer and recent graduate who thrives on the
          fields of football and Hindi poetry. I live by the motto: 'Life is an
          adventure waiting to be explored.' Also trying to be a bookworm cause
          it sounds geeky.
        </p>
      </div>
    </div>
  );
}
