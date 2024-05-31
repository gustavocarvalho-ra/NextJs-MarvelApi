import Image from "next/image"
import Link from "next/link"

export default function Notfound() {
  return (
    <>
      <div style={{height: '100vh', width: '100vw'}}>
        <Image src={"/not.png"} alt="Image 404" width={650} height={650} />
        <Link href={'/'}>Aperte aqui para voltar</Link>
      </div>
    </>
  )
}