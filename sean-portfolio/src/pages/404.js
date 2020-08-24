import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1> Oops. It's a dead end</h1>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </div>
        error-container
      </main>
    </Layout>
  )
}

export default Error
