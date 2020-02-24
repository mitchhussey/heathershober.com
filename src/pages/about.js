import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'
import * as Markdown from 'react-markdown'

const Generic = (props) => {
    const page = props.data.contentfulPage
    return (
        <Layout>
            <Helmet>
                <title>About | Heather Shober</title>
                <meta name="description" content="About Heather Shober- Her life, her family, and her legacy" />
            </Helmet>

            <Banner title={page.bannerTitle} subtitle={page.bannerSubtitle} image={page.bannerImage.file.url} />

            <div id="main" className="alt">
                { page.text && 
                    <section id="More">
                    <div className="inner">
                        <Markdown className="blogBody" source={page.text.text}/>
                    </div>
                    </section>
                }
            </div>

        </Layout>
    )
}

export const aboutPageQuery = graphql
`query AboutPageQuery {
  contentfulPage(page: {eq: "About"}) {
    bannerSubtitle
    bannerTitle
    bannerImage {
      file {
        url
      }
    }
    page
    text {
      text
    }
  }
}`

export default Generic