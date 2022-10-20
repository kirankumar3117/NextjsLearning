## Link component navigation

import Link was different from useRouter
Link is a default component in next

Link has some specific way to write

<Link href="https://google.com"><a>Google</a></Link>
<Link href="/"><a>Home</a></Link>

"/" represents the root component 
 

This Link is used for client side navigation 

## Navigate Programatically

we use useRouter with the push method
router.push("/product)  like this.

we can use replace also instead of push to manage tha stack of history

## 404 page 

next provides default 404 page which is very helpfull

we can also customise this 404 page by creating 404.js file in pages section