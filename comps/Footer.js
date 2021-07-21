import Image from 'next/image'

const Footer = () => {
    return ( 
        <footer className="bg-pink">
            <div className="container">
               <div className="row">
                  
                  <div className="col-xl-4"></div>
                  <div className="col-xl-4 align-items-center">
                  <Image src="/ss-main.png" width={400} height={340} alt="Picture of the author" />
                  </div>
                  <div className="col-xl-4"></div>
               </div>
            </div>
           <p className="pb-80">Copyright 2021 Seoul Sahara</p> 
        </footer>
     );
}
 
export default Footer;