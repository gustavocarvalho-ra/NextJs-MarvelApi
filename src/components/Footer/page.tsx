"use client"

import Link from "next/link";

import { Foo } from "./styles"; 


export default function Home() {

  return (
    <Foo>
      <div className="container">
        <h3>
          desenvoldido por: <Link href={"https://github.com/gustavocarvalho-ra"}>Gustavo</Link>
        </h3>
      </div>
    </Foo>
  )
}