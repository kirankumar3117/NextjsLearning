import { useRouter } from "next/router"

function Doc(){
    const router=useRouter();
    const {params=[]}=router.query;
    console.log(params)
    if(params.length==2) return <h1>Viewing the {params[0]} of {params[1]}</h1>
    if(params.length==0) return <h1>Doc Home Page</h1>
    return(<h1>viewing {params[0]} Doc Home Page</h1>)

}
export default Doc