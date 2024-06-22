"use client"
import Link from "next/link"
import Image from "next/image"

import { A, Nav } from "./styles"

export default function Header() {
  return (
    <>
      <A>
        <Link href={'/'}>
          <Image src={"/logo.png"} alt="Logo image" width={110} height={60}></Image>
        </Link>
      </A>
      <Nav>
        <Link className="a" href={'/characters'}>characters</Link>
        <Link className="a" href={'/comic'}>comics</Link>
        <Link className="a" href={'/series'}>series</Link>
      </Nav>
    </>
  )
}