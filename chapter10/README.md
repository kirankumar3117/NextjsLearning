# TWO FORMS OF PRE-RENDERING

1. Static Generation
2. Server-side Rendering 

* static generation is what so far we are doing 

* <em><h2>Static Generation</h2></em>
* The HTML is statically generated at build time. The build page is then cached and reused for each request.
* For a dynamic page with getStaticPaths and fallback set to true the page is not generated at biuld time but is generated on the initial request.
* With incremental static regeneration, a page can be regenerated for a request after the revalidation time has elapsed.
* For the most part, the pages are generated using getStaticProps when you build the project.

# Main Problems with Static Generation

## <em><strong>We cannot fetch data at request time</strong></em>

* With not being able to fetch data per request, we run into the problem of stale data.
* Let's say we are building a news website.
* The content is very dynamic in the sence that new articles can be published almost every second.
* getStaticProps will fetch the news at build time which is not suitable at all.
* getStaticPaths will help fetch the data on the initail request but it is then cached for subsequent requests.
* Incremental static generation (ISR) can help but if revalidate is 1 second, we still might not always see the most up to date news when the regeneration is happening in the background.
* Rather fetch the data on the client side by making a get request from the component. But no SEO.

## <em><strong>We don't get access to the incomming request</strong></em>

* Problem whne the data that needs to be fetched is specific to a user.
* Let's say we are building a website similar to twitter.
* As a user, I should be able to see tweers that are personalized based on my interests.
* The tweets that I see also need to be SEO friendly as it is public content that anyone in the world can see.
* To fetch tweets specific to the user, we need the userId, And that can be obtained only if have we access to the incomming request.
* You could do it client side in useEffect for example but that means you again miss out on SEO.

<h1>To over come this problems</h1>

* Next.js provides 

# Server-side Rendering (SSR) 


* Next.js allows you to pre-render a page not a build time but at request time.
* The HTML generated for every incoming request.
* SSR is a form of pre-rendering where the HTML is generated at request time.
* SSR is required when you need to fetch data per request and also when you need to fech personalized data keeping in mind SEO.


## BUT THE QUESTION IS how this happence ... ?
* How does Next.js make it possible to fetch data at request time.
* How does Next.js make it possible to get access to the incoming request which will facilliteate fetching data personalized for a user.

# getServerSideProps

1. 
 * getServerSideProps runsd only on the server side
 * The function will never run client-side
 * The code you write inside getServerSideProps won't even be included in the JS bundle thet is sent to the browser
2. 
 * You can write server-side code directly in getServerSideProps
 * Accessing the file system using the fs module or querying a database can be done inside getServerSideProps
 * You also don't have to worry about including API keys in getServerSideProps as that won't make it to the browser
3. 
 * getServerSideProps is allowed only in a page and cannot be run from a regular component file 
 * It is used only for pre-rendering and not client-side data fetching
4. 
 * getSercerSideProps should return an object and object should contain a props key which is an object.
5. 
 * getServerSideProps will run at request time




