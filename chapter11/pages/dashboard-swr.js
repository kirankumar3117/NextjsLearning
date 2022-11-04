import useSWR from "swr";

const fetchData= async ()=>{
    const responce=await fetch("http://localhost:8080/dashboard")
    const data= await responce.json();

    return data;
}

function DashboardSWR(){
    const {data,err}=useSWR('dashboard',fetchData)

    if(err) return 'An error occured'
    if(!data) return 'Loading'

    return <div>
    <h2>Dashboard</h2>
    <h3>posts-{data.posts}</h3>
    <h3>likes-{data.likes}</h3>
    <h3>followers-{data.followers}</h3>
    <h3>following-{data.following}</h3>
</div>
}

export default DashboardSWR;

