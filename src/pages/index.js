// Step 1: Import React
import * as React from 'react'
// import { Link, link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
// Step 2: Define your component (using hard coded link)
// const IndexPage = () => {
//   return (
//     <main>
//       <h1>Welcome to my Gatsby site!</h1>
//       <Link to="/about">About</Link>
//       <p>I'm making this by following the Gatsby Tutorial.</p>
//       <p>Hello World!</p>
//     </main>
//   )
// }

// Step 2: Define your component (using layout component)
const IndexPage = () => {
 return (
  <Layout pageTitle="Home Page">
    <p>I'm making this by following the Gatsby Tutorial.</p>
    <StaticImage
      alt="Photo of a puppy" 
      src="../images/doggy.jpg"
    />
  </Layout>
 )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage