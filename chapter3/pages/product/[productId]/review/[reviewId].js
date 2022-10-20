import {useRouter} from "next/router"
function reviewId(){
    const router=useRouter();
    const {productId,reviewId}=router.query;
    return(<h1>product {productId} review {reviewId}</h1>)
}
export default reviewId;