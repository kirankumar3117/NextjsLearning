import {useRouter} from "next/router"
function employeeId({employee}){

    const router=useRouter();

    if(router.isFallback){
        return (<h1>Loading .... </h1>)
    }
    return(<>
    
    <h1>{employee.id} {employee.body}</h1>
    
    </>)
}

export default employeeId

export async function getStaticPaths(){
    const responce = await fetch("https://jsonplaceholder.typicode.com/posts")

    const data = await responce.json();

    // const paths= data.map(e=>{
    //     return (
    //         {
    //             params:{
    //                 employeeid:`${e.id}`
    //             }
    //         }
    //     )
    // })


   

    return{
        paths:[
            {
                params:{employeeid: "1"}
            },
            {
                params:{employeeid: "2"}
            },
            {
                params:{employeeid: "3"}
            },
        ],
        // paths,
        fallback:true,
        
    }
}

export async function getStaticProps(context){
    const {params}=context;
    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.employeeid}`)


    console.log(`Generating getStaticProps for  employeelis/${params.employeeid}`)

    const data = await responce.json();

    if(!data.id){
        return {
            notFound:true,
        }
    }

    return {
        props:{
            employee:data
        }
    }

}