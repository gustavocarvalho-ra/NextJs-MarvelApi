"use client"

import Image from "next/image";
import Link from "next/link";

import { Man } from "./styles"; 

export default function Home() {

  return (
    <Man>
      <button className="bt">
        <Link href={'/has'}>Ir para busca</Link>
      </button>
    </Man>
  );
}
