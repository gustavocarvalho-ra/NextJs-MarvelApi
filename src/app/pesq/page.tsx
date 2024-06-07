"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import md5 from "md5";

import { Bg } from "./styles";

export default function Prin() {
  const time = Number(new Date());
  const keyPu = "1819332dc7d58586ce9a9bc528e0b7b2";
  const keyPr = "fbdcd44109e6c3664d1217c42bc25417a9421498";
  const hash = md5(time + keyPr + keyPu);

  const [data, setData] = useState([]);
  async function logDa() {
    const response = await fetch (
      `https://gateway.marvel.com:443/v1/public/characters?limit=15&ts=${time}&apikey=${keyPu}&hash=${hash}`
    );
    const json = await response.json()

    return json.data.results;
  }

  console.log(time)


  useEffect(() => {
    logDa()
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Erro de busca:", error);
      });
  }, [])

  return (
    <Bg>
      {data.map((item) => (
        <div key={item.id}>
          <p className="nam">{item.name}</p>
          <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Image of Caracter" width={50} height={50} />
        </div>
      ))}
    </Bg>
  )
}