import React from 'react'
import styles from './product-grid.module.css'
import ProductCard from '../Product-Card/product-card'
import sneaker from '../../assets/products/sneaker-photo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function ProductGrid() {
  
  const sneakers = [
        { id: 0, img: sneaker, categoria: 'Tênis', name: 'K-Swiss V8', gender: 'masculino', price: 200, discountPrice: 100 },
        { id: 1, img: sneaker, categoria: 'Tênis', name: 'Nike Revolution', gender: 'masculino', price: 319.99, discountPrice: 219.99 },
        { id: 2, img: sneaker, categoria: 'Tênis', name: 'Asics Gel-Nimbus', gender: 'feminino', price: 749.99, discountPrice: 649.99 },
        { id: 3, img: sneaker, categoria: 'Tênis', name: 'Reebok Nano X3', gender: 'masculino', price: 499.99, discountPrice: 449.99 },
        { id: 4, img: sneaker, categoria: 'Tênis', name: 'Mizuno Wave Prophecy', gender: 'feminino', price: 999.99, discountPrice: 899.99 },
        { id: 5, img: sneaker, categoria: 'Tênis', name: 'Adidas Ultraboost', gender: 'feminino', price: 599.99, discountPrice: 499.99 },
        { id: 6, img: sneaker, categoria: 'Tênis', name: 'Puma RS-X', gender: 'masculino', price: 399.99, discountPrice: 349.99 }
    ];
  
  
  return (
    <section className={styles['product-grid-container']}>
      <div >
        <div className={styles.row}>
          <p>Pordutos em alta</p>
          <a href="/produtos">
            Ver todos
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </a>
        </div>
        <div className={styles['product-grid-wrapper']}>
          {sneakers.map((produto) =>{
              return (
              <ProductCard
                key = {produto.id}
                img = {produto.img}
                categoria = {produto.categoria}
                name = {produto.name}
                gender = {produto.gender}
                price = {produto.price}
                discountPrice = {produto.discountPrice}
              />
            )})}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid