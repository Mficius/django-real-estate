import React from 'react'
import { Helmet } from 'react-helmet'


const Title = ({title, derscription, keywords}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={derscription} />
        <meta name='keywords' content={keywords} />

    </Helmet>
  )
}

Title.defaultProps={
    title:"Welcome to Real Estate",
    derscription: "We sell the best properties in town",
    keywords: "land, real estate, best value"
};

export default Title