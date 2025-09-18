import React from 'react'
import styles from './product-card.module.css'
import sneaker from '../../assets/products/Layer 1aa 2.png'

function ProductCard(props) {
  return (
    <div className={styles['product-card']}>
      
      <div className={styles['product-card-image']}>
        <img src={sneaker} alt="" />
      </div>
      

      <div className={styles['product-card-description']}>
        <h3 className={styles['product-card-category']}>
          Tênis
        </h3>

        <h1 className={styles['product-name']}>
          K-Swiss V8 - Masculino
        </h1>

        <div className={styles['price-row']}>
          <p className={styles.price}>
            R$ 200
          </p>

          <p className={styles.discount}>
            R$ 100
          </p>
        </div>
      </div>

    </div>
  )
}

export default ProductCard