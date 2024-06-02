"use client"

import Image from "next/image";

import LayoutOff from "./layout";
import Header from "@/components/Header";
import { Bg } from "./styles";


export default function Aaa() {
  const timeStamp = '1717367046';
  const Api = '1819332dc7d58586ce9a9bc528e0b7b2';
  const hash = 'abf850a1524c59c9dadabcd98bf63de1';

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
