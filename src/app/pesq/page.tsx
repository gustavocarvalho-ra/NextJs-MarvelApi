"use client"

import Image from "next/image";
import md5 from 'md5';

import { Bg } from "./styles";

export default function Aaa() {
  const time = Number(new Date());
  const keyPu = '1819332dc7d58586ce9a9bc528e0b7b2';
  const keyPr = 'fbdcd44109e6c3664d1217c42bc25417a9421498'
  const hash = md5(time + keyPr + keyPu);

  // async function htt(jsonParsed: string) {
  //   const data = await fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=6&ts=${time}&apikey=${keyPu}&hash=${hash}`
  //   ).then((response) => {
  //     return response.json();
  //   }).then((jsonParsed) => {
  //     console.log(jsonParsed);
  //   })
  //   // console.log(data)
  // }

  
  const data = fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=6&ts=${time}&apikey=${keyPu}&hash=${hash}`
  ).then((response) => {
    return response.json();
  }).then((jsonParsed:string) => {
    console.log(jsonParsed);
  })

  console.log(data)

  return (
    <Bg>
      {/* {data
      .map(item => (
        <div>
          <p>`${item.id}`</p>
        </div>
      ))} */}
      <p>
        asdd
      </p>
    </Bg>
  );
}
