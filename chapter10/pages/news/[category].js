import { getDisplayName } from "next/dist/shared/lib/utils";


function ArticleCtegory({articles,name}){
    return(<div>
        <h1>List of {name} Items</h1>
        {articles.map((item)=>{
            return <div key={item.id}>
                <h2>{item.id} {item.title}</h2>
                <h4>{item.description}</h4>
                <hr/>
            </div>
        })}
    </div>)
}

export default ArticleCtegory;


export async function getServerSideProps(context){
    const {params}=context;
    const {category}=params;
    const responce=await fetch(`http://localhost:8080/news?category=${category}`)
    const data = await responce.json();
    return{
        props:{
            name:category,
            articles:data,
        }
    }
}