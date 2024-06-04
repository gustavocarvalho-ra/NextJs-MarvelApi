"use client"

import Image from "next/image";

import LayoutOff from "./layout";
import Header from "@/components/Header";
import { Bg } from "./styles";


export default function Aaa() {
  const timeStamp = '1717465875';
  const Api = '1819332dc7d58586ce9a9bc528e0b7b2';
  const hash = '0c2e2c494bf371cd4661eb29d1ad3931';

  fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apiKey=${Api}&hash=${hash}&limit=6`)
  .then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
  })


  return (
    <Bg>
      <p>
        asdd
      </p>
    </Bg>
  );
}
