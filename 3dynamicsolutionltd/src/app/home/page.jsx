import Styles from "./page.css"
import Image from "next/image"
export default function loginpage(){
    return(
        <div>
            <Image className="im"src="/title.png" alt="" width={400} height={200}></Image>
            <h1 className="heading">3Dynamic Solutions Ltd</h1>
            <p className="intro">Hi ,this is Dynamic Solution Limited and we are here to help you to start your bussiness
                <br></br>
            </p>
        </div>
    )
}