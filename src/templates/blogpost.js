// import React from "react";
// import { Link, graphql } from "gatsby";
// import Layout from "../components/layout";
// import * as Markdown from 'react-markdown'
// import Banner from '../components/Banner'
// import Helmet from 'react-helmet'

// const BlogPost = ({ data }) => {
//   const { title, subtitle, slug, description = "blog post by Mitch Hussey", body, heroImage=null, tags } = data.contentfulBlogPost;
//   return (
//     <Layout>
//       <Helmet
//         title={title + " | Mitch Hussey"}
//         meta={[
//             { name: "description", content: description },
//             { name: "og:site_name", content: "mitchhussey.com" },               
//             { name: "og:description", content: description },
//             { name: "og:type", content: "article" },               
//             { name: "og:image", content: heroImage.fixed.src || "//images.ctfassets.net/v9cc47kccvgb/6jlh6Rx6ZjOLj3FTUMU69j/fcd5d9ed4526fa9185db8e706982435b/website-icon.png" },
//             { name: "url", content: `https://mitchhussey.com/blog/${slug}` },               
//             { name: "canonical", content: `https://mitchhussey.com/blog/${slug}`},
//         ]}
//       >         
//       </Helmet>
//       <Banner title={title} subtitle={ description } heroImage={heroImage.fixed.src} />
//       <section id="about me">
//         <div className="inner">
//             <span id="body">
//               <Markdown className="blogBody" source={body.body}/>
//             </span>
//             <Link to="/blog">View more posts</Link>
//         </div>
//       </section>
//     </Layout>
//   );
// };
// export default BlogPost;
// export const pageQuery = graphql`
//   query($slug: String!) {
//     contentfulBlogPost(slug: { eq: $slug }) {
//       title
//       subtitle
//       description
//       slug
//       body {
//         body
//       }
//       heroImage {
//         fixed {
//           src
//         }
//       }
//     }
//   }
// `;