import React from 'react'
import styles from './all-products.module.css';
import Filter from '../filter-checkbox/Filter.jsx';
import ProductGrid from "../Product-Grid/Product-grid.jsx";
import Foto from "../../assets/products/sneaker-photo.png"
import sneakers from "../../mocks/sneakers.js";

function AllProducts() {  
  
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