const Details = () => {
    return ( 
        <div>
            <h2>details</h2>
        </div>
     );
}
 
export default Details;
// import { useHistory } from "react-router-dom"

// import { useRouter } from 'next/router'

// export const getStaticPaths = async () => {
//     const res = await fetch('http://localhost:4000/subscribers/');
//     const data = await res.json();
//     console.log(data)
    
//     const paths = data.map(ninja => {
//         return {            
//              params: { id: ninja.id.toString() }
//         }
//     })
//     return {
//         paths,
//         fallback: false
//     }
// }


// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch('http://localhost:4000/subscribers/' + id);
//     const data = await res.json();

//     return {
//         props: { ninja: data }
//       }
//     }


// const Details = ({ninja}) => {
    
//     const router = useRouter()
//     const handleClick = () => {
//         fetch('http://localhost:4000/subscribers/' + ninja.id,{
//             method: 'DELETE'
//         }).then(() => {
//             router.push('/admin')
//         })
//     }
//     return ( 
//         <div>
//             <h1>{ ninja.name }</h1>
//             <p>{ ninja.email }</p>
//             <p>{ ninja.phone }</p>
//             <p>{ ninja.message }</p>
            
//             <button onClick={handleClick} >delete</button>
//         </div>
//      );
// }
 
// export default Details;