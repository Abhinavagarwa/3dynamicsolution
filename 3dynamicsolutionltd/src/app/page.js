import Image from "next/image";
import Styles from "./page.module.css";

export default function Home() {
  return (
    <div className={Styles.container}>
      <button className={Styles.btn}>Get Started</button>
    </div>
  );
}
