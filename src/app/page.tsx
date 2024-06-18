"use client"

import Link from "next/link";
import Image from "next/image";

import { Man } from "./styles"; 
import { IoSearch } from "react-icons/io5";



export default function Home() {

  return (
    <Man>
      <div className="bac">
        <div className="container">
          <h1>MARVEL <span>CHARACTERS</span></h1>
          <section className="options">
            <Link className="hel" href={'/pesq'}>
              <button>
                Go search <br/>
                <IoSearch style={{marginTop: 6}}/>
              </button>
            </Link>
            
            <Link className="hel" href={'/comic'}>
              <button>
                Go comics <br/>
                <IoSearch style={{marginTop: 6}}/>
              </button>
            </Link>
          </section>
        </div>

        <Image className="bg" src={"/nest.png"} alt="test" fill={true} />
      </div>
    </Man>
  );
}
