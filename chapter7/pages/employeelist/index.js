import Link from "next/link"
function EmployeeList({employeeData}){
    return(<div>
      {employeeData.map((e)=>{
        return <div key={e.id}>
            <Link href={`/employeelist/${e.id}`}>
            <h2>{e.title}</h2>
            </Link>
            <hr/>
        </div>
      })}
    </div>)
}

export default EmployeeList;

export async function  getStaticProps(){
    const responce=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data =await responce.json();

    return {
        props:{
            employeeData:data.slice(0,3),
        }
    }
}