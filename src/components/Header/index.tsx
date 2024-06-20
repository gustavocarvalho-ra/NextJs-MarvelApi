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
          {/* <input type="text">Search</input> */}
        </Link>
      </A>
      <Nav>
        <Link href={'/characters'}>Characters</Link>
        <Link href={'/comic'}>Comics</Link>
      </Nav>
    </>
  )
}