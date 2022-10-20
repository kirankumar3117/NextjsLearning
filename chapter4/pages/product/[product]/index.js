import { useRouter } from "next/router"

function ProductId(){
    const router=useRouter();
    const productId=router.query.product
    return(<div>
        <h1>Product id is {productId}</h1>
    </div>)
}

export default ProductId