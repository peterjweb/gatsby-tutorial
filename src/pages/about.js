// Step 1: Import React
import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
// Step 2: Define your component (using hard coded links)
// const AboutPage = () => {
//   return (
//     <main>
//       <h1>Welcome to my About Page</h1>
//       <Link to="/">Back to Home</Link>
//       <p>I'm making this about page by following the Gatsby Tutorial.</p>
//       <p>Hello World!</p>
//     </main>
      
//   )
// }
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}
// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>About Page</title>

// Step 3: Export your component
export default AboutPage