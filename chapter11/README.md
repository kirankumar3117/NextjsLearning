# How to set cookies and query the data ... ?


[example] :-
  * export async function getServerSideProps(context){
    const {params ,res ,req, query}=context;
    console.log("query",query)
    console.log(req.headers.Cookie);
    res.setHeader('Set-Cookie',["name=KiranKumar"])
    console.log()
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

### what do we learn so far....

# Client-side DataFetching
1. Two forms of pre-rendering
 * Static Generation & Server-side Rendering
2. How to fetch data
 * getStaticProps & getServerSideProps

* You might not always need to pre-render the data

Ex:- User dashboard page
 * It is private, that is behind a login screen
 * Highly user-specific and SEO is not relevant
 * No need to pre-render the data
 * You can rely on client side data fetching
 

# Data fetching with SWR [stale-while-revalidate]

## EXAMPLE

 * import useSWR from "swr";

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

# Pre-rendering + Client Side Data Fetching

## <em>Event Listing Page</em>
* A page that shows a list of events happening around you
* SEO + Request time data fetching -> Server -side rendering with getServerSideProps
* Client-side data fetching for filtering events
* (Ideally, both pagination and filtering would take place client ide but, for thi example, we're only going to focu on filtering)

# Pre-rendering & Data Fetching Summary

* Pre-rendering refers to the process of generation HTML in advance which results in better performance and SEO
* Next JS supports two forms of pre-rendering -static Generation And Server -side Rendering 

<em>Static Generation</em>

* Amethod of pre-rendering where the HTML pages are generated at build time
* Pages can be built once, cached by a CDN and server to clients almost instantly.
* <em>Example</em>: Marketing or Blogging site
* For a normal page, use getStaticProps function to fetch the data ahead of time.
* For dynamic page , you also need the getStaticProps function 
* <em>fallback</em> : false | true | 'blocking'
* Pages cannnot be updated without a full re-build
* Incremental Static Regeneration


<em>Server-side rendering</em>

* Fetch data at request time
* Personalize data based on user information in the incoming request
* <em>Example</em> : News listing page
* getServerSideProps function helps with SSR data fetching 
* Combines pre-rendering with client-sde fetching 
* Shallow routing -Routingwithpout getStaticProps/ getServerSideProps


