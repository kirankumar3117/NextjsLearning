
function PostId(props){
    const {postId}=props;

    return <div>
        <div>
            <h4>{postId.id} {postId.title}</h4>
            <div>{postId.body}</div>
        </div>
    </div>
}

export default PostId;

export async function getStaticPaths(){
    
    const responce=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data =await responce.json();

    // data.slice(0,3);

    // const paths=data.map(e=>{
    //     return {
    //         params:{
    //             postid: `${e.id}`
    //         }
    //     }
    // })

    return {
        paths:[
            {
                params:{postid:'1'}
            },
            {
                params:{postid:'2'}
            },
            {
                params:{postid:'3'}
            },
        ],
        fallback: 'blocking'
    }
}


export async function getStaticProps(context){
    const {params}=context;

    const responce=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`);
    const data =await responce.json();

    console.log(`generating getstaticprops - of ${params.postid}`)

    return {
        props:{
            postId:data
        }
    }
}