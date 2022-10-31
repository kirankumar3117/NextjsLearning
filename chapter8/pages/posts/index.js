import Link from "next/link"
function Posts(props){
    const {post} = props;

   
    return <div>
        <h1>List Of Posts</h1>

        {post.map((e)=>{
            return    <Link href={`posts/${e.id}`} key={e.id}>
            
              <div>

                <div>{e.id}</div>
                <div>{e.title}</div>
                <hr/>
             </div>
            </Link>
        })}
    </div>
}

export default Posts;




export async function getStaticProps(){
    const responce=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data =await responce.json();

    return {
        props:{
            post:data.slice(0,3)
        }
    }
}

