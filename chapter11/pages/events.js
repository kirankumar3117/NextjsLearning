import { useState } from "react";
import {useRouter} from "next/router"
function ListOfEvents({listOfEvents}){
    const router=useRouter();
    const [list,setList]=useState(listOfEvents)
    
    const fetchSportsEvents=async ()=>{
        const responce=await fetch("http://localhost:8080/events?category=sports");
        const data=await responce.json();
        setList(data);
        router.push("events/?category=sports",undefined,{shallow:true})
    }

    return<>
    <button onClick={fetchSportsEvents}>Sports Evnets</button>
    <h1>List Of Events</h1>
    {
        list.map((event)=>{
            return <div key={event.id}>
                <h2>{event.id} {event.title} {event.date} | {event.category}</h2>
                <p>{event.description}</p>
                <br/>
                <hr/>
            </div>
        })
    }
    
    </>
}

export default ListOfEvents;


export  async function getServerSideProps(context){
    const {query}=context;
    const {category}=query;
    const querystring = category ? `category=sports` : ``
    const response= await fetch(`http://localhost:8080/events?${querystring}`)
    const data=await response.json();
    return {
        props:{
            listOfEvents:data,
        }
    }

}