## HOW BUILD COMMAD WORKS
* Nextjs is a react Frame work fro production
* the output in our  terminal displays about each route
* the first load genrates all the corresponding js shared data in chunks
* basically irresoective what we are viewing build command build the entire bundle
* we can see how this pages uses the chunk data by viewing size and first load in terminal
* the first load show green yellow and red out which green is refered to perfomance and that is what we always look for.

## UNDERSTANDING BUILD OUTPUT
* We an also see some js files in server pages which are trasnformation from pages to components.

## UNDERSTANDING THE START SCRIPT

* Any <Link/> component in the viewport (initially or through scroll) will be prefetched by default (inclusing the correspoonding data ) for pages using static generation.

## <Link/> prefetch condition 
* When a page with getStaticProp is re-renderd at build time , in addion to the page HTML file Next.Js generates a JSON file holding the result of running getStatciProps.
* The JSON file will be used in client side routing through next/link, or next/router.
* When you navigate to a page that's pre-rendered using getStaicProps , Next.Js fetches the JSON file (which is pre-computed at build time ) and uses it as a props to create a page component client side.
* client-side props will not call getStaticProps as only the exported JSON is used.

## Static Generation Summary So Far
* Staic Generation is a methos of pre-rendering where the Html Pages are generated at build time.
* with and with-out external data.
* Export getStaticProps function for external data 
* HTML, Java and a JSON file are generated 
* If you navigate directly to teh page route, the HTML file is served
* If you navigate to the page route from a different route, the page is created client side using the Javascript and JSON prefetched from the server.
