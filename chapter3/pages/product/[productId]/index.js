import { useRouter } from "next/router";

function Id(){
    const router=useRouter();
    const productId=router.query.productId;
    return(<>
    <h1>{productId} Proctiod page</h1>
    </>)
}
export default Id;