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
          Desenvoldido por: Gustavo
        </h3>
        <h3>
          Redes para contato: 
          <Link href={"https://github.com/gustavocarvalho-ra"} target="_blank"><FaGithub /></Link> 
          <Link href={"https://www.linkedin.com/in/gustavo-carvalho-7bb361205/"} target="_blank"><SiLinkedin /></Link>
        </h3>
      </div>
    </Foo>
  )
}