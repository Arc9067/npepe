import React from "react";
import personRight from "../assets/person-right.png";
import personLeft from "../assets/person-left.png";

const Hero = () => {
  return (
    <section className="py-[50px] w-full relative h-auto">
      <div className="container flex justify-center items-center flex-col gap-7 text-center">
        <h1 className="text-5xl lg:text-8xl font-luckiestGuy">
          Prepare for the rise of New Pepe Coin
        </h1>
        <p className="font-workSans text-xl">
          a groundbreaking cryptocurrency project poised to surpass the previous
          Pepe Coin's remarkable achievements and make an even bigger impact in
          the crypto world.
        </p>

        <a
          href="https://www.dextools.io/app/ether/pair-explorer/0xd6DA84419E7a021E39d1fa1E9FD35A3eDF8b10fD"
          target="_blank"
          className="w-[355px] h-[54px] px-8 py-4 bg-white z-50 rounded shadow  border justify-center items-center gap-[10px] text-primary text-[16px] leading-snug font-anakeimDisplaySsiRegular  hover:bg-primary hover:text-white"
        >
          ape now
        </a>
        <p className="z-50 text-3xl break-all">
          0xB4b3ff72693585E08dbfD5794510cc7448a4F7cF
        </p>
        <a
          className="z-50 text-2xl break-all"
          href="malito:Newpepecoin@gmail.com"
        >
          Newpepecoin@gmail.com
        </a>

        <div className="">
          <img
            src={personLeft}
            alt=""
            className="absolute -bottom-40 left-0 w-[10rem] lg:w-auto"
          />
          <img
            src={personRight}
            alt=""
            className="absolute -bottom-40 right-0 w-[10rem] lg:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
