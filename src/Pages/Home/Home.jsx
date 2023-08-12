import React from 'react'
import HomeBanner from '../HomeBanner/HomeBanner'
import Categories from '../Categories/Categories'
import MiddleBanner from '../MiddleBanner/MiddleBanner'
import Deal from '../Deal/Deal'
import Blog from '../../Blog/Blog/Blog'
import ProductTab from '../../Products/ProductTab/ProductTab'

const Home = () => {
  return (
<>

      <HomeBanner></HomeBanner>
      <Categories></Categories>
      <MiddleBanner></MiddleBanner>
      <ProductTab></ProductTab>
      <Deal></Deal>
      <Blog></Blog>

</>
  )
}

export default Home