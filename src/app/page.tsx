"use client"

import Link from "next/link";
import Image from "next/image";

import back from "../public/images/nest.png"

import { Man } from "./styles"; 

export default function Home() {

  return (
    <Man>
      <div className="bac">

        <Image className="bg" src={back} alt="test" fill={true} />
          <h1>MARVEL <span>CHARACTERS</span></h1>

          <button className="bt">

            <Link className="hel" href={'/pesq/has'}>Ir para busca</Link>
          </button>
      </div>
    </Man>
  );
}
