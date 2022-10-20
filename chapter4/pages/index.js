import Link from "next/link"
import { useRouter } from "next/router";
function Home(){
  const router=useRouter();
  const handlepage=()=>{
    router.push("/product")
  }
  return(<div>
    <h1>This is Home Page</h1>
    <Link href='/blog'>
    <a>Blog</a>
    </Link>

    <div>
      <button onClick={handlepage}>Product Page</button>
    </div>
  </div>)
}

export default Home;