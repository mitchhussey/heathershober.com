import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import * as Markdown from 'react-markdown'
import Banner from '../components/Banner'
import Helmet from 'react-helmet'

const Memory = ({ data }) => {
  const { title, author, memory, image=false} = data.contentfulMemory;
  return (
    <Layout>
      <Helmet
        title={title}
        meta={[
            { name: "og:site_name", content: "heathershober.com" },               
            image && { name: "og:image", content: image.fixed.src },
        ]}
      >         
      </Helmet>
      <Banner title={title} subtitle={ author } image={image && image.fixed.src} />
      <section>
        <div className="inner">
            <span id="body">
              <Markdown className="blogBody" source={memory.memory}/>
            </span>
            {/* <Link to="/memories">View more memories</Link> */}
        </div>
      </section>
    </Layout>
  );
};
export default Memory;
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulMemory(slug: { eq: $slug }) {
      title
      memory { memory }
      author
      image {
        fixed {
          src
        }
      }
    }
  }
`;