import React from 'react'
import ProductDetails from '../features/products/components/productDetails'
import Navbar from '../features/navbar/Navbar'

const ProductDetailPage = () => {
  return (
    <div>
        <Navbar>
        <ProductDetails></ProductDetails>
        </Navbar>
    </div>
  )
}

export default ProductDetailPage