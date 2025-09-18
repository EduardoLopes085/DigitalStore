import React from 'react'
import styles from './product-grid.module.css'
import ProductCard from '../Product-Card/product-card'


function ProductGrid() {
  return (
    <section className={styles['product-grid-container']}>
        <div className={styles['product-grid-wrapper']}>

          <ProductCard/>

          <ProductCard/>

          <ProductCard/>

          <ProductCard/>

          <ProductCard/>
          
          <ProductCard/>
          
          
        </div>
    </section>
  )
}

export default ProductGrid