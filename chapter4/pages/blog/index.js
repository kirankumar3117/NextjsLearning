import Link from "next/link"
function Blog(){
    return(<div>
        <h1>This is Blog Page</h1>
        <Link href="/"><a>Home</a></Link>
    </div>)
}
export default Blog;