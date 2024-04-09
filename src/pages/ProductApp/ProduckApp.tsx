import React from 'react'
import ProductsGroup from '../../components/productGroup/ProductsGroup'
import ProductBlock from '../../components/ProductBlock/ProductBlock'
import DropdownSort from '../../components/dropdownSort/dropdownSort'

function ProductApp() {
  return (
    <div>
        <ProductsGroup/>
        <DropdownSort/>
        <ProductBlock/>
    </div>
  )
}

export default ProductApp