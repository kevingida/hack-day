import Image from "next/image";
import HeroImage from "../../public/wink-studio-luffy-nika-lightning-resin-statue003.jpg";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-auto w-full max-w-screen-xl">
      <div className="w-full relative">
        <Image
          className=" brightness-75"
          src={HeroImage}
          width={1600}
          height={900}
          alt="Hero Image"
        />
        <Link href="/shop">
          <p className="inline-flex absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-4/4 lg:w-auto w-full px-3 py-2 rounded text-white bg-purple font-bold items-center justify-center transition ease-in-out delay-350 hover:bg-midnight hover:transition-all drop-shadow-2xl ">
            Our Collections
          </p>
        </Link>
      </div>
      <div className="bg-black w-full h-100 flex flex-row justify-between my-10 mt-20">
        <div className="flex flex-col py-4 gap-10">
          <Link href="/sell-figure">
            <h1 className=" text-2xl font-bold underline">
              WHY SELLING WITH US
            </h1>
          </Link>

          <p>
            Welcome to Figure Forge, the ultimate destination for collectors and
            aficionados passionate about action figures. Our store encapsulates
            the spirit of preservation and celebration of iconic figures from
            various universes. Within our vibrant displays lie treasures waiting
            to be discovered. Our dedicated team understands the sentimental
            value each figure holds. As a former collector myself, I experienced
            firsthand the seamless process of parting ways with a cherished
            action figure.
          </p>
        </div>
        <Image
          className=" brightness-75"
          src="https://www.resingrounds.com/cdn/shop/products/1_5c3ea413-0758-4032-b03d-48bf14ca44f9_580x.jpg?v=1638325481"
          width={400}
          height={400}
          alt="Hero Image"
        />
      </div>
      <div className="bg-metal w-full h-100 flex flex-row justify-between my-10">
        <Image
          className=" brightness-75"
          src="https://tsumeart-1d733.kxcdn.com/web/image/167936-9f6cb5f6/naruto_montage_intro%20%281%29.png"
          width={400}
          height={400}
          alt="Hero Image"
        />
        <div className="flex flex-col py-4 justify-around">
          <Link href="/about">
            <h1 className=" text-2xl font-bold text-midnight underline">
              ABOUT US
            </h1>
          </Link>
          <p className="text-midnight">
            Welcome to Figure Forge, the ultimate destination for collectors and
            aficionados passionate about action figures. Our store encapsulates
            the spirit of preservation and celebration of iconic figures from
            various universes. Within our vibrant displays lie treasures waiting
            to be discovered. Our dedicated team understands the sentimental
            value each figure holds. As a former collector myself, I experienced
            firsthand the seamless process of parting ways with a cherished
            action figure.
          </p>
        </div>
      </div>
    </main>
  );
}
