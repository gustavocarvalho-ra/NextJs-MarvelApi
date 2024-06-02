"use client"
import Link from "next/link"
import Image from "next/image"

import { A } from "./styles"

export default function Header() {
  return (
    <A>
      <Image src={"/logo.png"} alt="Logo image" width={50} height={20}></Image>
      <h1>ksks</h1>
      <Link href= {'/fix'}> aqui</Link>
    </A>
  )
}