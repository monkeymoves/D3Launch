import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        
        <section className="section">
        <div
          className="med-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/jumbotron.jpg')`,
          }}
        >
          {/* <h1
            className="has-text-weight-bold is-size-3"
            style={{
              boxShadow: '0.5rem 0 0 #009CB4, -0.5rem 0 0 #009CB4',
              backgroundColor: '#009CB4',
              color: 'white',
              padding: '1rem',
            }}
          >
            D3 Blog
          </h1> */}
        </div>
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
