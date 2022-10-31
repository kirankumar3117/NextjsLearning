import {useRouter} from "next/router"

function ProductId({databyid}){
    const router=useRouter();

    if(router.isFallback){
        return <h1>Loding The Page ...</h1>
    }
    return <div>
        <h1>{databyid.id} {databyid.name}</h1>
        <h4>{databyid.price} </h4>
    </div>
}

export default ProductId;



export async function getStaticPaths(){
    const responce=await fetch(`http://localhost:4000/products`);
    const data=await responce.json();

    // const paths=data.map((e)=>{
    //     return {
    //         params:{
    //             productid:`${e.id}`
    //         }
    //     }
    // })

    return {
        paths:[
            {
                params:{productid:'1'}
            }
        ],
        fallback:true
    }
}



export async function getStaticProps(context){
    const {params}=context;

    const responce=await fetch(`http://localhost:4000/products/${params.productid}`);
    const data=await responce.json();

    return {
        props:{
            databyid:data
        }
    }
}