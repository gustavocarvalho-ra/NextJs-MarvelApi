"use client"
import Link from "next/link"
import Image from "next/image"

import { A } from "./styles"

export default function Header() {
  return (
    <A>
      <Image src={"/logo.png"} alt="Logo image" width={110} height={60}></Image>
    </A>
  )
}