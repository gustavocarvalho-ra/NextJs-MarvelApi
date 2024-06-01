"use client"

import Link from "next/link";
import Image from "next/image";

import back from "../public/back.png"

import { Man } from "./styles"; 

export default function Home() {

  return (
    <Man>
      <div className="bac">

        {/* <Image src={back} alt="test" width={1800} height={900} position={absolute}></Image> */}
          <h1>MARVEL <span>CHARACTERS</span></h1>

          <button className="bt">

            <Link className="hel" href={'/pesq/has'}>Ir para busca</Link>
          </button>
      </div>
    </Man>
  );
}
