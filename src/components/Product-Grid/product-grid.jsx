import React from 'react'
import styles from './product-grid.module.css'
import ProductCard from '../Product-Card/product-card'
// import sneaker from '../../assets/products/sneaker-photo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function ProductGrid({ products }) {
  return (
    <section className={styles['product-grid-container']}>
      <div className={styles['grid-wrapper']}>
        {/* <div className={styles.row}>
          <p>Produtos em alta</p>
          
          <a href="#">
            Ver todos
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </a>
        </div> */}

        <div className={styles['sneakers-grid']}>
            {products.map((tenis)=>{
              return (
                <ProductCard
                  key={tenis.id}
                  img={tenis.img} 
                  categoria={tenis.categoria}
                  name = {tenis.name}
                  gender={tenis.gender}
                  price={tenis.price}
                  discountPrice={tenis.discountPrice}  
                  discount = {tenis.discount}          
                />
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid