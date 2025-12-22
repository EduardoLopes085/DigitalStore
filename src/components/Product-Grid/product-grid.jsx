import React from 'react'
import styles from './product-grid.module.css'
import ProductCard from '../Product-Card/product-card'
import sneaker from '../../assets/products/sneaker-photo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function ProductGrid() {
  
  const sneakers = [
  { id: 0, img: sneaker, categoria: 'Tênis', name: 'K-Swiss V8', gender: 'masculino', price: 200, discountPrice: 100, discount: 50 },
  { id: 1, img: sneaker, categoria: 'Tênis', name: 'Nike Revolution', gender: 'masculino', price: 319.99, discountPrice: 219.99, discount: 31 },
  { id: 2, img: sneaker, categoria: 'Tênis', name: 'Asics Gel-Nimbus', gender: 'feminino', price: 749.99, discountPrice: 649.99, discount: 13 },
  { id: 3, img: sneaker, categoria: 'Tênis', name: 'Reebok Nano X3', gender: 'masculino', price: 499.99, discountPrice: 499.99, discount: 0 },
  { id: 4, img: sneaker, categoria: 'Tênis', name: 'Mizuno Wave Prophecy', gender: 'feminino', price: 999.99, discountPrice: 899.99, discount: 10 },
  { id: 5, img: sneaker, categoria: 'Tênis', name: 'Adidas Ultraboost', gender: 'feminino', price: 599.99, discountPrice: 499.99, discount: 17 },
  { id: 7, img: sneaker, categoria: 'Tênis', name: 'Puma RS-X', gender: 'masculino', price: 399.99, discountPrice: 399.99, discount: 0 }
];


  
  
  return (
    <section className={styles['product-grid-container']}>
      <div className={styles['grid-wrapper']}>
        <div className={styles.row}>
          <p>Produtos em alta</p>
          
          <a href="#">
            Ver todos
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </a>
        </div>

        <div className={styles['sneakers-grid']}>
            {sneakers.map((tenis)=>{
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