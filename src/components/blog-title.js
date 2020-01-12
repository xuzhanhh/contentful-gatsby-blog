import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => {
  console.log('data', data)
  return <div className={styles.hero}>
    <Img style={{objectFit: 'initial'}} className={styles.heroImage} sizes={data.image.sizes} />
    <div className={styles.heroDetails}>
      {/* <h3 className={styles.heroHeadline}>{data.title}</h3> */}
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.description}</p>
    </div>
  </div>
}
