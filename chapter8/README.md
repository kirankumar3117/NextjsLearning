## getStaticPaths fallbakc - ' blocking '

# How fallback blocking effects the prerendering 

* The paths returned from the getStaticPaths will be rendered to HTML at build time by getStaticProps.

fallback blocking set like this 
* fallback : ' blocking '  // in string 

* The paths that have not been generated at build time will not result in a 404 page. Instead, on the first request, Next.js will render the page on the server and return the generated HTML.

* When that's done, the browser receives the HTML for the generated path. From the user's perspective, it will transition from "the browser is requesting the page" to "the full page is loaded". There is no flah of loading/fallback state.

* At the same time, Next.js keeps track of the new list of pre-rendered pages. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.

# When do we use blocking 

### when ?

* On a UX level ,sometimes, people prefer the page to be loaded without a loading indicator if the wait time is a few milli seconds. This helps avoid layout shift .
* Some crawlers did not support Javascript. The loading page would be rendered and then the full page would be loaded which was causing a problem.