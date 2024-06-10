"use client"

import Link from "next/link";

import { Foo } from "./styles";
import { FaGithub } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";



export default function Foot() {

  return (
    <Foo>
      <div className="container">
        <h3>
          Desenvoldido por: <Link href={"https://github.com/gustavocarvalho-ra"} target="_blank"> Gustavo</Link>
        </h3>
      </div>
    </Foo>
  )
}