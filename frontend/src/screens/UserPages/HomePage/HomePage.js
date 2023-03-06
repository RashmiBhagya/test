import React from 'react'
import TopHome from '././TopHome'
import AboutHome from '././AboutHome'
import ChooseHome from '././ChooseHome'
import BenifitHome from '././BenifitHome'
import ProductHome from '././ProductHome'
import BrandNameHome from '././BrandNameHome'

const HomePage = () => {
  return (
    <div>
      <TopHome />
      <AboutHome />
      <ProductHome />
      <BenifitHome />
      {/* <ProductHome /> */}
      <BrandNameHome/>
    </div>
  )
}

export default HomePage