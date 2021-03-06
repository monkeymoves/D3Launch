import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image bgFULL margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        overflow: `hidden`,
        animation: `animation 200s linear infinite`,


        
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
      <img className="D3BannerLogo" src={subheading} alt="logo"/>

        <p
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
           backgroundColor: 'black',
            color: 'white',
            lineHeight: '40',
            padding: '40',
            opacity:'80%'
          }}
        >
      
      

        </p>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content  has-text-centered">
                  <div className=" has-text-centered ">
                    <h1 className="title ">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h5 className="subtitle">{mainpitch.description} </h5>
                  </div>
                  
                     <h5 className="subtitle"> <strong><em>"It works, don't just take our word for it, we can prove it!"</em></strong></h5>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                      <div className="column is-12 has-text-centered">
                        
                        <Link className="btn" to="/about">
                          About
                    </Link>&nbsp;
                        <Link className="btn" to="/services">
                          Services
                    </Link>&nbsp;
                        <Link className="btn" to="/contact">
                          Contact
                    </Link>
                      </div>
                 
                  </div>
                </div>
                {/* <div className=" has-text-centered"><h3>UK brands we've worked with</h3> </div> */}

                <Features gridItems={intro.blurbs} />
                {/* <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div> */}
<section class="">
<div class="">
  <div class=" is-fluid">
  <img src="./img/banner.png" alt="D3 banner"></img>

  </div>
</div>
</section>                
                <div className="column is-12">
                  <h5 className="has-text-weight-semibold is-size-4 has-text-centered">
                    {/* Latest blog articles */}
                  </h5>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div> 
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
