"use client"

import { CircleLoader } from "react-spinners"

export default function Loading() {
  return( 
    <section style={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <div style={{width: "100%", height: "100%", background: "#000", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <h1 style={{color: "#fff"}}>
          Loading...
        </h1>
        <CircleLoader color="#ed1a23" size={120} speedMultiplier={1}/>
      </div>
    </section>
  )
}