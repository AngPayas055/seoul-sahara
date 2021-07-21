import Footer from "./Footer"
import Navbars from "./Navbar"

const Layout = ( {children} ) => {
    return ( 
        <div className="content">
            <Navbars />
            { children }
            <Footer/>
        </div>
     );
}
 
export default Layout;