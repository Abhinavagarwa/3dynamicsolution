import Image from "next/image";
import Styles from "./page.module.css";
import Link from "next/link";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div>
         <Image className={Styles.im} src="/title.png" alt="" width={400} height={200}></Image>
         <Navbar />
    <div className={Styles.container}> 
    <p>Ready to take your digital presence to the next level? At 3DynamicSolutions Ltd, we make the journey from concept to completion seamless and stress-free. Whether you're starting from scratch or looking to enhance your existing digital strategy, our process is designed with your success in mind.</p> 
    <h3>1. Consultation</h3>
    <p>Begin with a one-on-one consultation where we get to know your business, understand your goals, and identify your unique challenges. This helps us tailor our services to meet your specific needs.</p>
    <h3>2. Strategy Development</h3>
    <p>Based on our consultation, we craft a personalized strategy that aligns with your objectives. Whether it’s a new website, an O2O integration, or strategic consultancy, we map out a clear plan of action.</p>
    <h3>. Design & Development
    </h3>
    <p>Our creative team brings your vision to life with cutting-edge design and development. We focus on creating user-friendly, visually appealing, and fully functional solutions that reflect your brand's identity.</p>
    <h3>4. Review & Refine    </h3>
    <p>Your feedback is crucial. We collaborate closely with you to review and refine the design, ensuring that the final product exceeds your expectations.</p>
    <h3>5. Launch & Support    </h3>
    <p>Once you’re satisfied, we launch your project with confidence. But our partnership doesn’t end there—we offer ongoing support and updates to keep your digital presence thriving</p>
    <h3>6. Growth & Optimization    </h3>
    <p>As your business evolves, we help you adapt and grow. From performance analytics to continuous improvements, we're here to ensure your digital strategy remains effective and relevant.</p>
    <p>Ready to get started? Contact us today to schedule your consultation and discover how 3DynamicSolutions Ltd can help you achieve your digital goals. Your success is just a click away!</p>
      <button className={Styles.btn}>
      <Link className={Styles.link} href="/home">Get Started</Link>
      </button>
    </div>
    </div>
  );
}
