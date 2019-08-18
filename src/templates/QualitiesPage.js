import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import BackgroundVideo from '../components/BackgroundVideo'
import ProductCard from '../components/ProductCard/ProductCard'
import Popup from '../components/Popup'
// Export Template for use in CMS preview
export const QualitiesPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  section2,
  video,
  videoPoster,
  videoTitle,
  accordion,
  body,
  gallery
}) => (
  <main>


    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={section1} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2>Products : Tap to see detailes</h2>
        <ProductCard images={gallery} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Content source={section2} />
      </div>
    </section>
  </main>
)

const QualitiesPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <QualitiesPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default QualitiesPage

export const pageQuery = graphql`
  query QualitiesPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        template
        featuredImage
        section1
        section2
        video
        videoPoster
        videoTitle
      }
    }
  }
`
