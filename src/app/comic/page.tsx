"use client"

import { useEffect, useState } from "react";
import md5 from "md5";

// import { api } from "@/services/temp";
import { ComicsData } from "../interfaces/types";
// import { Bg, BgFix } from "./styles";
import Header from "@/components/Header";
import Footer  from '@/components/Footer';


export default function Prin() {
  const time = Number(new Date());
  const keyPu = "1819332dc7d58586ce9a9bc528e0b7b2";
  const keyPr = "fbdcd44109e6c3664d1217c42bc25417a9421498";
  const hash = md5(time + keyPr + keyPu);

  const [search, setSearch] = useState<string>("")

  const [data, setData] = useState<ComicsData[]>([]);

  async function logData() {
    const test = search !== "" ? `https://gateway.marvel.com:443/v1/public/comics?format=comic&limit=30&ts=${time}&apikey=${keyPu}&hash=${hash}` : `https://gateway.marvel.com:443/v1/public/comics?format=comic&limit=20&ts=${time}&apikey=${keyPu}&hash=${hash}`

    const response = await fetch (
      test
    );

    const json = await response.json()
    return json.data.results;
  }

  useEffect(() => {
    logData()
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Erro de busca:", error);
      });
  }, [search])

  // debounce

  console.log(search)
  return (
    <>
      <Header />
      <>
        <>
          <div className="inPut">
            <h3 className="h3">Search character</h3>
            <input className="inp" type="text" defaultValue={search} onChange={(e) => setSearch(e.target.value)}/>
          </div>
          {data.map((item) => (
            <div key={item.id} className="cardOf">
              <div className="card">
                <div className="imge">
                  <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Image of Caracter" />
                </div>
                <div className="desc">
                  <p className="nam"><span>Name:</span> {item.title}</p>
                  <p className="description"><span>Description:</span> <br/>
                    {item.textObjects.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </>
      </>
      <Footer />
    </>
  )
}