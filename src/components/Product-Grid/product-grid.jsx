import React from 'react'
import styles from './product-grid.module.css'
import ProductCard from '../Product-Card/product-card'
// import sneaker from '../../assets/products/sneaker-photo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function ProductGrid({ products, variant = 'default', columns=4 }) {
  return (
    <section className={styles['product-grid-container']}>
      <div className={styles['grid-wrapper']}>
        

        {variant === "default" && (
          <div className={styles.row}>
          <p>Produtos em alta</p>
          
          <a href="#">
            Ver todos
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </a>
        </div>
        )}

        {variant === "count" && (
          <div className={styles.row}>
          <p>Resultados para "Tênis" - {products.length}</p>
          
          <select name="Filtro" id="">
              <option value="Maior Preço"> Ordenar por: Maior preço </option>
              <option value="Menor Preço"> Ordenar por: Menor preço </option>
              <option value="Relevancia"> Ordenar por: Maior preço </option>
              <option value="Vendas"> Ordenar por: Mais vendidos </option>
              <option value="Desconto"> Ordenar por: Maior Desconto </option>
              <option value="Relevancia"> Ordenar por: Nome A a Z </option>
              <option value="Relevancia"> Ordenar por: Nome Z a A </option>
          </select>
        </div>
        )}

        <div className={styles['sneakers-grid']} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
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