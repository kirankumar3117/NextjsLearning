import Link from "next/link"
function Product({productId=100}){

    return(
        <div>
            <Link href="product/1">
            <a><h1>Product 1 </h1></a>
            </Link>
            <Link href="product/2">
            <a><h1>Product 2 </h1></a>
            </Link>
            <Link href={`product/${productId}`}>
            <a><h1>Product {productId}</h1></a>
            </Link>
        </div>
    )

}

export default Product;