import React from 'react'
import PromotionalSection from './PromotionalSection'
import FeaturedProductSection from './FeaturedProductSection'
import LatestProducts from './LatestProducts'
import ShopexOffer from './ShopexOffer'

import UniqueTrendingProducts from './UniqueTrendingProducts'
import TrendingProducts from './TrendingProducts'

const HeroSection = () => {
  return (
    <div>
        <PromotionalSection />
        <FeaturedProductSection />
        <LatestProducts />
        <ShopexOffer />
        <UniqueTrendingProducts />
        <TrendingProducts />
    </div>
  )
}

export default HeroSection