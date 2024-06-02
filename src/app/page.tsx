"use client"

import Link from "next/link";
import Image from "next/image";

import back from "../public/images/nest.png"
import { Man } from "./styles"; 

export default function Home() {

  return (
    <Man>
      <div className="bac">
        <div className="container">
          <h1>MARVEL <span>CHARACTERS</span></h1>
          <Link className="hel" href={'/pesq/has'}>
            <button>
              Ir para busca
            </button>
          </Link>
        </div>

        <Image className="bg" src={back} alt="test" fill={true} />
      </div>
    </Man>
  );
}
