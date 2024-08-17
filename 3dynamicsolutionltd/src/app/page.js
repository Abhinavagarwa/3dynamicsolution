import Image from "next/image";
import Styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
         <Image className={Styles.im} src="/title.png" alt="" width={400} height={200}></Image>
    <div className={Styles.container}>  
      <button className={Styles.btn}>
      <Link className={Styles.link}href="/home">Get Started</Link>
      </button>
    </div>
    </div>
  );
}
