import Styles from "./page.css"
import Image from "next/image"
import Navbar from "@/components/navbar/navbar"
export default function loginpage(){
    return(
        <div>
            <Image className="im"src="/title.png" alt="" width={400} height={200}></Image>
            <Navbar />
            <h1>About Us</h1>
            <p className="intro">Welcome to 3DynamicSolutions Ltd, where innovation meets excellence in web design, O2O (Online to Offline) strategies, and expert consultancy. At 3DynamicSolutions, we specialize in creating dynamic and engaging digital experiences that not only captivate your audience but also drive tangible business results. Whether you're looking to transform your online presence, seamlessly connect your digital and physical channels, or need tailored consultancy to navigate the complexities of the digital landscape, our team of seasoned professionals is here to deliver solutions that are as unique as your business. Discover the future of digital success with 3DynamicSolutions Ltd – where your vision becomes reality.
            </p>
            <h3>Solutions Provided by Us</h3>
            <p className="services">
                1. Web Design<br></br>
                2. Consultancy<br></br>
                3. O2O Model<br></br>
                4. Rice Mill<br></br>
                5. DSA Coaching<br></br>
            </p>
            <h3></h3>
            <p></p>
        </div>
    )
}