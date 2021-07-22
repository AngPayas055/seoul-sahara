import { useState } from "react";
import { useRouter } from 'next/router'
const Franchise = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const blog = { name, email, phone, message };
    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      router.push('/')
    })
  }
    return ( 
        <>
        {/* <div className="row">
          <div className="col-12">
            <h2 className="text-center">Contact Us</h2>
          </div>
        
        </div>

        <form onSubmit={handleSubmit} >
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
          <textarea name="description" required
          value={message}
          onChange={(e) => setMessage(e.target.value)} defaultValue="Input your message" />
          </div>

        </div>
        <button>Submit</button>

      </div>
        </form> */}
        
      </>
     );
}
 
export default Franchise;