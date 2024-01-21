import React from "react";
import { Separator } from "@/components/ui/separator";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col justify-center px-16 py-2 font-mono mt-7">
      <div>
        <h1 className="text-center text-4xl font-bold">About me</h1>
        <p className="md:p-8 md:px-32 text-justify">
          I'm a CS Sophomore on a gap year between universities. I'm also a
          Co-Founder at Stockpile Labs - a decentralized community derived
          funding platform and Head of Growth at Solana University - a student
          organization aiming to equitize opportunities for college students on
          the Solana Blockchain.
          <br />
          <br />
          I'm passionate about building products and services that help forward
          society through tools that enable everyone to utilize emerging
          technologies. My current areas of interest are Full-Stack development,
          Solana Blockchain development and AI Application development, though I
          am always open to diving into new topics!
          <br />
          <br />
          Apart from my technological passions, I play competitive cricket at a
          professional level,
        </p>
      </div>
    </div>
  );
};

export default About;
