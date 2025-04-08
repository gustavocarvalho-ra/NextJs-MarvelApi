import Link from "next/link";

import { Foo } from "./styles";
import { FaGithub } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <Foo>
      <div className="container">
        <h3>
          Desenvolvido por: Gustavo
        </h3>

        <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
          <h3>
            Redes para contato:
          </h3>
          <Link href={"https://github.com/gustavocarvalho-ra"} target="_blank"> <FaGithub style={{fontSize: '18px', marginLeft: '15px', color: '#fff' }}/></Link> 
          <Link href={"https://www.linkedin.com/in/gustavo-carvalho-7bb361205/"} target="_blank"><SiLinkedin style={{fontSize: '18px', marginLeft: '15px', color: '#fff'}}/></Link>
        </div>
      </div>
    </Foo>
  )
}
