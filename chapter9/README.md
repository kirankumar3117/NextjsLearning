# Static Generation & Issues
<hr/>

* Static Generation is a method of pre-rendering where the HTML pages are generated at build time.
* The pre-rendered static pages can be pushed to as CDN, cashed and served to clients across the globe almost instantly .
* Static content is fast and better for SEO as they immedietly indexed by search engines.
* Static generation with getStaticProps for data fetching and getStaticPaths for dynamic pages seem like a really good approach to a wide variety of applications in prouction.

## Issues ...

1. The build time is proportional to the number of pages in the application 
## Issuse with build time 
 ###  Example Scenario
 * A page takes 100ms to build
 * E-commerce app with 100 products takes 10 seconds to build.
 * E-commerce app with 100,000 products takes > 2.5 hours to build.
 * It's not just the time, there are cost implications as well.
 * The problem only gets worse with more products you add to the system every new page increases the overall build time .
  
2. A page, once generated, can contain stale data till the time you rebuild the application.

## Issue with stale data
 * What if we build the app only once in a while ? 

  * Depeding on the nature of your application, you might run into the issue of stale data 
  * E-commerce app is not an application which you can build and deploy once in a while. Product details, especially product prices can vary everyday.
  * The entire app has to be re-build and the page with updated data will be statically generated.


# WHAT ABOUT getStaticPaths ?

* Pre-render only few pages at build time and rest of the pages can be pre-rendered on request.
* Can we not use that to render say 1000 most popular pages and rest of the 99000 pages can be pre-rendered on request
* If your application has 90% static pages and 10% dynamic pages, getStaticPaths will not help mush 
* An e-commerce site typically will have 90% dynamic pages and 10% static pages, So we can reduce the totla build time by using getStaticPaths.
* If still does not fix the issue of sale data
* If you render 1000 pages at build time, and then the rest are generated based on incomming request, using fallback true or fallback ' blocking ', changes in data will not update the already pre-rendered pages.


# Incremental Static Regeneration

* * There was a need to update only those pages which needed a change without having to rebuild the entire app

## Incremental Static Regeneration (ISR)

* With IS, Next.js allows you to update static pages after you've built your application 
* You can statically generate individual pages without needing to rebuild entire site, effectively solving the issue of dealing with stale data.

### But How ?

* In the getStaticProps function, apart from the props key, we can specify a <strong>revalidate</strong> key 
* The value for revalidate is the number of seconds after which a page re-generation can occur.


# Regeneration 
## Regeneration
* A regeneration is initiated only if a user makes a request after the revalidate time .
* If a user visits our prouct details page but there is no other user hitting that page the entire day, the re-generation does not happen.
* revalidate does not mean the page automatically re-generate every 10 seconds.
* It simply denotes the time after which, if a user makes a request , a re-generation has to be initiated.
* The re-generation can also fail and previously cached HTML could be served till the subsequent re-generation succeed.

