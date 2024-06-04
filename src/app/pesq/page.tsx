"use client"

import Image from "next/image";
import md5 from 'md5';

import { Bg } from "./styles";

export default function Aaa() {
  const time = Number(new Date());
  const keyPu = '1819332dc7d58586ce9a9bc528e0b7b2';
  const keyPr = 'fbdcd44109e6c3664d1217c42bc25417a9421498'
  const hash = md5(time + keyPr + keyPu);

  
  const data = fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=6&ts=${time}&apikey=${keyPu}&hash=${hash}`
  ).then((response) => {
    return response.json();
  }).then((jsonParsed) => {
    console.log(jsonParsed);
  })




  return (
    <Bg>
      {data
      .map(key => (
        <div>
          <p>`${key.id}</p>
        </div>
      ))}
      <p>
        asdd
      </p>
    </Bg>
  );
}
