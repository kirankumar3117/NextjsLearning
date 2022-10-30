import Link from  "next/link"
function LandingPage(){
  return(<div>
    <h1>This is Landing Page</h1>
    <Link href="/employeelist" >Employees</Link>
  </div>)
}

export default LandingPage;
