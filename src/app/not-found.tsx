import Image from "next/image"

export default function Notfound() {
  return (
    <>
      <div style={{height: '100vh', width: '100vw'}}>
        <Image src={"/not.png"} alt="Image 404" width={650} height={650} />
        <h2>404</h2>
      </div>
    </>
  )
}