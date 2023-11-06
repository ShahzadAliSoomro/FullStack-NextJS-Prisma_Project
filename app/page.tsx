import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center text-black">
      <div>How to add the shedow effect just body</div>
      <div>
        <Image
          src="/vec-d (1).png"
          alt="vector"
          width={500}
          height={500}
          className="w-[500px] lg:w-[580px] lg:h-[580px] object-cover drop-shadow-2xl"
          loading="eager"
          priority
        />
      </div>
    </main>
  );
}
