import { useEffect, useState } from "react";

function Dashboard(){
    const [isLoading,setIsLoading]=useState(true)
    const [data,setData]=useState(null);
    useEffect(()=>{
        async function fetchData(){
            const responce=await fetch("http://localhost:8080/dashboard")
            const finaldata=await responce.json();
            setData(finaldata)
            setIsLoading(false)
        }

        fetchData()
    },[])

    if(isLoading){
        return <h2>Loading...</h2>
    }
    return <div>
        <h2>Dashboard</h2>
        <h3>posts-{data.posts}</h3>
        <h3>likes-{data.likes}</h3>
        <h3>followers-{data.followers}</h3>
        <h3>following-{data.following}</h3>
    </div>
}

export default Dashboard;