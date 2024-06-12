"use client"
// import api from "@/services/temp";

import { ApiError } from "next/dist/server/api-utils";
import { useEffect, useState } from "react";
import md5 from "md5";

import { Bg, BgFix } from "./styles";


export default function Prin() {
  const time = Number(new Date());
  const keyPu = "1819332dc7d58586ce9a9bc528e0b7b2";
  const keyPr = "fbdcd44109e6c3664d1217c42bc25417a9421498";
  const hash = md5(time + keyPr + keyPu);

  type ResponseData = {
    id: string;
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  }


  async function logData() {
    const response = await fetch (
      `https://gateway.marvel.com:443/v1/public/characters?limit=20&ts=${time}&apikey=${keyPu}&hash=${hash}`
    );
    const json = await response.json()

    return json.data.results;
  }

  const [data, setData] = useState<ResponseData[]>([]);

  useEffect(() => {
    logData()
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Erro de busca:", error);
      });
  }, [])

  return (
    <Bg>
      <BgFix>
        {data.map((item) => (
          <div key={item.id} className="cardOf">
            <div className="card">
              <div className="imge">
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Image of Caracter" />
              </div>
              <div className="desc">
                <p className="nam"><span>Name:</span> {item.name}</p>
                <p className="description"><span>Description:</span> <br/>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </BgFix>
    </Bg>
  )
}