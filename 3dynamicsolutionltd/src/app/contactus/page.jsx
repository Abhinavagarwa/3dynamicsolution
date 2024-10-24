"use client"

import Styles from "./page.css"
import Image from "next/image"
import Navbar from "@/components/navbar/navbar"
import { useState } from 'react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject:'',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form Data:', formData);
  };

  return (
    <div className="container">
     <Image className="im"src="/title.png" alt="" width={400} height={200}></Image>
     <Navbar />
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="subject">Subject</label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        >
            <option value="1">Web design</option>
            <option value="2">Consultancy</option>
            <option value="3">O2O Model</option>
            <option value="4">Rice Mill</option>
            <option value="5">DSA Coaching</option>
        </select>

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {submitted && <p>Thank you for contacting us!</p>}
    </div>
  );
};

export default Contact;
