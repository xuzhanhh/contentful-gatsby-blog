import React from 'react';
import get from 'lodash/get'
import BlogTitle from '../components/blog-title'
import ArticlePreview from '../components/article-preview'
const Fgn = (props) => {
  const [{node: fgnTitle}] = get(props, 'data.allContentfulFgnHeader.edges')
  const posts = get(props, 'data.allContentfulFgn.edges')
  console.log(posts)
  return (
    <div style={{ background: '#fff' }}>
      {/* <Helmet title={siteTitle} /> */}
      <BlogTitle data={fgnTitle} />
      {/* <div className={styles.hero}>
        Blog
      </div> */}
      <div className="wrapper">
        <h2 className="section-headline">Recent articles</h2>
        <ul className="article-list">
          {posts.map(({ node }) => {
            return (
              <li key={node.slug}>
                <ArticlePreview article={node} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default Fgn;

export const pageQuery = graphql`
query fgnIndexQuery {
  allContentfulFgn(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  allContentfulFgnHeader(filter: { title: { eq: "霏gn"}}) {
    edges {
      node {
        title
        description
        image: backgroundImg  {
          sizes(
                # maxWidth: 1180
                # maxHeight: 480
                resizingBehavior: PAD
                background: "rgb:000000"
              ) {
                ...GatsbyContentfulSizes_withWebp
              }
        }
      }
    }
  }
}
`