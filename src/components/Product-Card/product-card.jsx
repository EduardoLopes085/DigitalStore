import React from 'react'
import styles from './product-card.module.css'
import DiscountAlert from '../discount-alert/discountAlert';

function ProductCard(props) {
  return (
    <div className={styles['product-card']}>
      
      <DiscountAlert desconto={props.discount} />

      <div className={styles['product-card-image']}>
        <img src={props.img} alt={`Foto do tênis ${props.name}`}/>
      </div>
      

      <div className={styles['product-card-description']}>
        <h3 className={styles['product-card-category']}>
          {props.categoria}
        </h3>

        <h1 className={styles['product-name']}>
          {props.name} - {props.gender}
        </h1>

        <div className={styles['price-row']}>
          <p className={styles.price}>
            R$ {props.price}
          </p>

          <p className={styles.discount}>
            R$ {props.discountPrice}
          </p>
        </div>
      </div>

    </div>
  )
}

export default ProductCard