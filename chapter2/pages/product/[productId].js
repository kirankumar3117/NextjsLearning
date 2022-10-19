import {useRouter} from "next/router"
function ProductId(){
    const router=useRouter();
    const productId=router.query.productId
    return(<h1>{productId ? productId : "product"} Page Details..!</h1>)
  }
  
  export default ProductId