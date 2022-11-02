function NewsArticles({news}){
    return (
        <div>
            <h1>List Of Articles</h1>
            {news.map((article)=>{
                return(
                    <h2 key={article.id}>{article.id} {article.title} | {article.category}</h2>
                )
            })}
        </div>
    )
}

export default NewsArticles;

export async function getServerSideProps(){
    const responce=await fetch("http://localhost:8080/news");
    const data=await responce.json();
    return {
        props:{
            news:data,
        }
    }
}