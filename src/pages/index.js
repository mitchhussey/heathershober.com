import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import * as Markdown from 'react-markdown'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {
      const recentMemories = this.props.data.allContentfulMemory.edges.map((edge) => edge.node)
      const page = this.props.data.contentfulPage  
        return (
            <Layout>
                <Helmet
                    title="Heather Hussey Shober"
                >
                </Helmet>

                <Banner title={page.bannerTitle} subtitle={page.bannerSubtitle} image={page.bannerImage.file.url} showLinks={ true } />

                <div id="main">
                    { page.text && 
                      <section id="two">
                          <div className="inner"> 
                              <section id="More">
                              <div className="inner">
                                  <Markdown className="blogBody" source={page.text.text}/>
                              </div>
                              </section>
                          </div>
                      </section>
                    }
                    <h3 className="inner">Memories of Heather</h3>
                    <section id="one" className="tiles">
                    {recentMemories.map((memory, index) => {
                      return (
                        <article style={{ backgroundImage: `url(${memory.image.file.url})` }}>
                          <Link to={`memories/${memory.slug}`}>
                            <header className="major">
                              <h3>{memory.title}</h3>
                              <h4>{memory.author}</h4>
                            </header>
                          </Link>
                          <Link to={`memories/${memory.slug}`} className="link primary"></Link>
                        </article>
                      )
                    })}
                    
                    </section>
                    
                </div>

            </Layout>
        )
    }
}

export const indexPageQuery = graphql
`query IndexPageQuery {
  contentfulPage(page: {eq: "Homepage"}) {
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
  allContentfulMemory {
    edges {
      node {
        slug
        title
        author
        image {
          file {
            url
          }
        }
      }
    }
  }
}`

export default HomeIndex