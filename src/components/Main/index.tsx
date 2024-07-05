"use client"

import Link from "next/link"
import Image from "next/image"
import { IoSearch } from "react-icons/io5";


import {Man, Bg} from "./styles"

export default function Main() {
  return(
    <>
      <Man style={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <Bg>
          <Image src={"/nest.png"} alt="test" fill={true} style={{filter: "brightness(13%"}}/>
        </Bg>

        <div className="bac" style={{width: "100%", height: "100%"}}>
          <div className="content">
            <div className="title" style={{zIndex: "100"}}>
              <h1>MARVEL <span>API</span></h1>
            </div>
            
            <section className="options">
              <Link className="hel" href={'/characters'}>
                <button>
                  Characters <br/>
                  <IoSearch style={{marginTop: 6}}/>
                </button>
              </Link>

              <Link className="hel" href={'/comic'}>
                <button>
                  Comics <br/>
                  <IoSearch style={{marginTop: 6}}/>
                </button>
              </Link>

              <Link className="hel" href={'/series'}>
                <button>
                  Series <br/>
                  <IoSearch style={{marginTop: 6}}/>
                </button>
              </Link>

              <Link className="hel" href={'/even'}>
                <button>
                  events <br/>
                  <IoSearch style={{marginTop: 6}}/>
                </button>
              </Link>
            </section>
          </div>
        </div>


      </Man>
    </>
  )
}


        