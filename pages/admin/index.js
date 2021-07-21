import Link from 'next/link'
export const getStaticProps = async () => {

    const res = await fetch('http://localhost:4000/subscribers');
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}


const Admin = ( { ninjas } ) => {
    return ( 
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <h1 className="text-center">Admin Page</h1>
                        <h3 className="text-center">Contact form Collection</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">

                   
                        {ninjas.map(ninja => (
                        <Link href={'/admin/' + ninja.id} key={ninja.id}>
                            <a className="single">
                                <h3>{ ninja.name }</h3>
                            </a>
                        </Link>
                        ))}

                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Admin;