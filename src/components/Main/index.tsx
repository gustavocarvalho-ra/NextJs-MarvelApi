"use client"

import Link from "next/link"
import Image from "next/image"
import { IoSearch } from "react-icons/io5";


import {Man, Bg} from "./styles"

export default function Main() {
  return(
    <>
      <Man style={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        

        <div className="bac" style={{width: "100%", height: "100%"}}>
          <div className="content" style={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <div className="title" style={{height: "30vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", cursor: "default"}}>
              <h1 style={{color: "var(--main-color)", fontSize: "7em", fontWeight: "900"}}>MARVEL <span style={{color: "#fff", fontWeight: "900"}}>API</span></h1>
            </div>
            
            <section className="options" style={{display: "flex", gap: "2.5rem"}}>
              <Link className="hel" href={'/characters'} style={{width: "250px", height: "100px", alignContent: "center", justifyContent: "center"}}>
                <button style={{width: "100%", height: "100%", color: "#fff", fontSize: "2em", textTransform:"uppercase", background: "rgba(255, 255, 255, 0.05)", filter: "blur(0.1px)", border: "1px solid rgba(255, 255, 255, 0.3)", borderRadius: "16px", cursor: "pointer", transition: "all .6s"}}>
                  Characters <br/>
                  <IoSearch style={{marginTop: 6}}/>
                </button>
              </Link>

              <Link className="hel" href={'/comic'} style={{width: "250px", height: "100px", alignContent: "center", justifyContent: "center"}}>
                <button style={{width: "100%", height: "100%", color: "#fff", fontSize: "2em", textTransform:"uppercase", background: "rgba(255, 255, 255, 0.05)", filter: "blur(0.1px)", border: "1px solid rgba(255, 255, 255, 0.3)", borderRadius: "16px", cursor: "pointer", transition: "all .6s"}}>
                  Comics <br/>
                  <IoSearch style={{marginTop: 6}}/>
                </button>
              </Link>

              <Link className="hel" href={'/series'} style={{width: "250px", height: "100px", alignContent: "center", justifyContent: "center"}}>
                <button style={{width: "100%", height: "100%", color: "#fff", fontSize: "2em", textTransform:"uppercase", background: "rgba(255, 255, 255, 0.05)", filter: "blur(0.1px)", border: "1px solid rgba(255, 255, 255, 0.3)", borderRadius: "16px", cursor: "pointer", transition: "all .6s"}}>
                  Series <br/>
                  <IoSearch style={{marginTop: 6}}/>
                </button>
              </Link>

              <Link className="hel" href={'/even'} style={{width: "250px", height: "100px", alignContent: "center", justifyContent: "center"}}>
                <button style={{width: "100%", height: "100%", color: "#fff", fontSize: "2em", textTransform:"uppercase", background: "rgba(255, 255, 255, 0.05)", filter: "blur(0.1px)", border: "1px solid rgba(255, 255, 255, 0.3)", borderRadius: "16px", cursor: "pointer", transition: "all .6s"}}>
                  events <br/>
                  <IoSearch style={{marginTop: 6}}/>
                </button>
              </Link>
            </section>
          </div>
        </div>

        <Bg>
          <Image src={"/nest.png"} alt="test" fill={true} style={{filter: "brightness(13%)", zIndex: "-5", objectFit: "cover"}}/>
        </Bg>

      </Man>
    </>
  )
}
