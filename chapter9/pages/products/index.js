import Link from "next/link"
function Products({products}){
    return <div>
        
        <h1>List Of products</h1>
        {products.map((e)=>{
            return <div key={e.id}>
                <Link href={`products/${e.id}`}>
                <h5>{e.id} {e.name}</h5></Link>
              
               
                <hr/>
                </div>
        })}
         </div>
}


export default Products;


export async function getStaticProps(){

    console.log("Regenerating Product List")
    const responce=await fetch("http://localhost:4000/products")

    const data=await responce.json();

   

    return {
        props:{
            products:data
        },
        revalidate: 10 ,
    }
}

