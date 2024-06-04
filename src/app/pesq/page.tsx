"use client"

import Image from "next/image";
import md5 from 'md5';

import { Bg } from "./styles";


export default function Aaa() {
  const time = Number(new Date());
  const Api = '1819332dc7d58586ce9a9bc528e0b7b2';
  // const hash = '0c2e2c494bf371cd4661eb29d1ad3931';
  const hash = md5(time +  + Api);


  fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=6&ts=${time}&apikey=${Api}&hash=${hash}`
  ).then((response) => {
    return response.json();
  }).then((jsonParsed) => {
    console.log(jsonParsed);
  })




  return (
    <Bg>
      
      <p>
        asdd
      </p>
    </Bg>
  );
}
