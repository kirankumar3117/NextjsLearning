## pre rendering 
what and why pre rendering ...?


Types of pre-rendering 
1. static generation
 
2. server side rendering
 
Client side rendering 
Combine pre-rendernig with client side rendering

## Nextjs vs Reactjs
* By default next pre-renders every page in the application

* Next generates HTML for each page in advance instead having all done by client side javascript

## Static generation with getStaticProps


--------example---------

export async function getStaticProps(){
    const responce=await fetch("https://jsonplaceholder.typicode.com/todos");
    const data=await responce.json();
   return {
        props:{
            data:data
        }
   }
}
* 1. 
    * getStaticProps run only on server side
    * the function will never run on client side
    * the code you write inside getStaticProps won't even be included in the JS bundle that is sent to the     browser
* 2. 
    * you can write server side code directly in getStaticProps
    * Accessing the file system using the fs module or quering the datacase can be done inside getStaticProps
* 3. 
    * getStaticProps only allowed in page and can't be run from regular component file
    * It is only used for pre-rendering and not for client side data fetching
