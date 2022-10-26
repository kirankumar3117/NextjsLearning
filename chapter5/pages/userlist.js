import Data from "../componenent/data";

function UserList({data}){
    return(<div>
        {data.map((e)=>{
            return <Data data={e}/>
        })}
       UserList
    </div>)
}

export default UserList;

export async function getStaticProps(){
    const responce=await fetch("https://jsonplaceholder.typicode.com/todos");
    const data=await responce.json();
   return {
        props:{
            data:data
        }
   }
}