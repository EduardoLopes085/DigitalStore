import React from 'react'
import styles from './all-products.module.css';
import Filter from '../filter-checkbox/filter';
import ProductGrid from "../Product-Grid/product-grid";
import Foto from "../../assets/products/sneaker-photo.png"

function AllProducts() {
    
        const sneakers = [
                { id: 0, img: Foto, categoria: 'Tênis', name: 'K-Swiss V8', gender: 'masculino', price: 200, discountPrice: 100, discount: 50 },
                { id: 1, img: Foto, categoria: 'Tênis', name: 'Nike Revolution', gender: 'masculino', price: 319.99, discountPrice: 219.99, discount: 31 },
                { id: 2, img: Foto, categoria: 'Tênis', name: 'Asics Gel-Nimbus', gender: 'feminino', price: 749.99, discountPrice: 649.99, discount: 13 },
                { id: 3, img: Foto, categoria: 'Tênis', name: 'Reebok Nano X3', gender: 'masculino', price: 499.99, discountPrice: 499.99, discount: 0 },
                { id: 4, img: Foto, categoria: 'Tênis', name: 'Mizuno Wave Prophecy', gender: 'feminino', price: 999.99, discountPrice: 899.99, discount: 10 },
                { id: 5, img: Foto, categoria: 'Tênis', name: 'Adidas Ultraboost', gender: 'feminino', price: 599.99, discountPrice: 499.99, discount: 17 },
                { id: 7, img: Foto, categoria: 'Tênis', name: 'Puma RS-X', gender: 'masculino', price: 399.99, discountPrice: 399.99, discount: 0 }
            ];
  
  
    return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles['content-row']}>
                <div className={styles['filter-container']}>
                    <Filter/>
                </div>


                <div className={styles['grid-container']}>
                    <ProductGrid products = { sneakers } variant = "count" columns={3}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllProducts