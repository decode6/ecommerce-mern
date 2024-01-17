import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'

const Product = () => {
  const {all_products} = useContext(ShopContext)
  const {productId} = useParams();
  
  return (
    <div>Product</div>
  )
}

export default Product