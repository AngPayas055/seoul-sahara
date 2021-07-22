import Head from 'next/head'
import Image from 'next/image'
import { useState } from "react";
import { useRouter } from 'next/router'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HistoryImg from '../public/history-img.jpg'
import { GetServerSideProps } from 'next'




export default function Home() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
const router = useRouter();



  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { name, email, phone, message };
    
    fetch('http://localhost:4000/subscribers/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      router.push('/')
    })
    console.log(handleSubmit)
  }

 

  return (
    <>
    <Head>
      <title>Seoul Sahara</title>
      <meta name="keywords" content="Seoul Sahara" />
    </Head>
      <section className="hero">
        <div className="container-fluid text-center">
          <div className="ss-main ">           
            <Image src="/ss-main.png" width={400} height={340} alt="Picture of the author" />
            <h3 className="red-text pb-80">Only the best <span className="text-blue">Korean</span> street food</h3> 
          </div>                       
        </div>            
      </section>

      <section className="history">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 "></div>
            <div className="col-xl-4 ">
              <h4 className="color-gold mt-80">THE SEOUL SAHARA</h4>
              <p className="color-white">{"Diver by our passion and desire to cater only the best quality and authentic taste of homemade Japanese Maki that every Filipino deserves to experience at a very friendly price, the Juan'ts Maki food stand is created and hit the market since the begininning of the year 2021."}                
              </p>
              <p className="color-white"> 
              We aim to provide indisriminately the good food and excellent service readily for everyone to enjoy.
              </p>
            </div>
            <div className="col-xl-6 history-img">          
              {/* <img align="right" src="/history-img.jpg" alt="P" />    */}
              <div className="d-flex justify-content-end mt-80 mb-5 me-0">
                 <Image src="/history-img.jpg" width={400} height={250} alt="Picture of the author" />   
              </div>
                    
            </div>            
          </div>
        </div>
      </section>
      
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
               <h3 className="text-center color-blue mt-80 ">Our menu</h3>
               <h2 className="text-center color-light-pink mt-negative ">Satisfy your Cravings</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <div className="menu-img mt-80">                
                <Image src="/maki.jpg" width={350} height={350} alt="Picture of the author" />
                <p className="color-white bg-blue text-center mt-3 pt-2 pb-2">Maki Sushi</p>
              </div>
            
            </div>
            <div className="col-xl-4">
            <div className="menu-img mt-80">
                <Image src="/maki.jpg" width={350} height={350} alt="Picture of the author" />
                <p className="color-white bg-blue text-center mt-3 pt-2 pb-2">Maki Sushi</p>
              </div>
            </div>
            <div className="col-xl-4">
            <div className="menu-img mt-80">
                <Image src="/maki.jpg" width={350} height={350} alt="Picture of the author" /> 
                <p className="color-white bg-blue text-center mt-3 pt-2 pb-2">Maki Sushi</p>
              </div>
            </div>
          </div>
          {/* row */}

          <div className="row mb-80">
            <div className="col-xl-4">
              <div className="menu-img mt-80">
                <Image src="/maki.jpg" width={350} height={350} alt="Picture of the author" />
                <p className="color-white bg-blue text-center mt-3 pt-2 pb-2">Maki Sushi</p>
              </div>
            
            </div>
            <div className="col-xl-4">
            <div className="menu-img mt-80">
                <Image src="/maki.jpg" width={350} height={350} alt="Picture of the author" /> 
                <p className="color-white bg-blue text-center mt-3 pt-2 pb-2">Maki Sushi</p>
              </div>
            </div>
            <div className="col-xl-4">
            <div className="menu-img mt-80">
                <Image src="/maki.jpg" width={350} height={350} alt="Picture of the author" /> 
                <p className="color-white bg-blue text-center mt-3 pt-2 pb-2">Maki Sushi</p>
              </div>
            </div>
          </div>
          {/* row */}
        </div>
      </section>

      <section>
        <div className="container-fluid bg-black">
           <div className="row">
              <div className="col-12 ">
                <h3 className="text-center color-gold mt-80 ">Our Franchise</h3>
                <h2 className="text-center text-grey mt-negative ">Made with Passion</h2>
              </div>
            </div>

            <div className="row">
            
              <div className="col-xl-7 bg-blue mt-80">
                <div className="franchise-details">
                <h4 className="color-gold mt-80">STARTER BUSINESS PACKAGE</h4>
                <p className="color-white">
We always continue to strive and delight people with all the best that we can give, through products we make with integrity and goodwill.</p>
                </div>
                
              </div>
              
              <div className="col-xl-5">
                <div className="franchise-img mt-80">
                  {/* <img src="/franchise.jpg" alt="P"/>  */}
                  <Image src="/franchise.jpg" width={500} height={600} alt="Picture of the author" />
                </div>
                
              </div>
            </div>
        </div>
      </section>

      <section>
      <div className="row">
          <div className="col-12">
            <h2 className="text-center">Contact Us</h2>
          </div>
        
        </div>

        <form onSubmit={handleSubmit} method="post" action="/">
        <div className="container mt-80 mb-80">
        <div className="row">
            <div className="col-12">
            <label>Name:</label>
            <input type="name" required value={name}
          onChange={(e) => setName(e.target.value)} id="name" name="name" placeholder="Input your name"/>
            </div>
        </div>
          

        <div className="row">

          <div className="col-xl-6">
            <label className=
            'mt-3'>Enter your email:</label>
            <input type="email" required value={email}
          onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder="Input your email"/>
          </div>

          <div className="col-xl-6">
          <label  className=
            'mt-3'>Enter your phone number:</label>
          <input type="tel" required value={phone}
          onChange={(e) => setPhone(e.target.value)} id="phone" name="phone" placeholder="Input your number"/>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">

          <label  className=
            'mt-3'>Input your message</label>          
          <textarea name="message" required
          value={message}
          onChange={(e) => setMessage(e.target.value)}  />
          </div>

        </div>
        <button>Submit</button>

      </div>
        </form>
        
      </section>
    </>
      
    
  )
}
