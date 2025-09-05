import React from 'react';
import styles from '../colection-destach/colection-destach.module.css';
//import camiseta from '../../assets/images/tshirtGray.svg'
import Calca from '../../assets/images/calcaGray.svg?react'
import Headphone from '../../assets/images/headphoneGray.svg?react'
import Tenis from '../../assets/images/footGray.svg?react'
import CamisetaIcon from '../../assets/images/tshirtGray.svg?react';


function ColectionDestach() {
  return (
    <div className={styles['collection-destach']}>
        <div className={styles['collection-container']}>
            <div className={styles['collection-title']}>
                Coleções em destaque
            </div>
            <div className={styles['collection-row']}>

                <div className={styles['collection-item']}>
                    
                    <div className={styles['collection-icon']}>
                        <CamisetaIcon  />
                    </div>

                    <div className={styles['item-text']}>
                        Camisetas
                    </div>

                </div>

                <div className={styles['collection-item']}>
                    
                    <div className={styles['collection-icon']}>
                        <Calca/>
                    </div>

                    <div className={styles['item-text']}>
                        Calças
                    </div>

                </div>

                <div className={styles['collection-item']}>
                    
                    <div className={styles['collection-icon']}>
                        <Calca/>
                    </div>

                    <div className={styles['item-text']}>
                        Bonés
                    </div>

                </div>

                <div className={styles['collection-item']}>
                    
                    <div className={styles['collection-icon']}>
                        <Headphone/>
                    </div>

                    <div className={styles['item-text']}>
                        Headphones
                    </div>

                </div>

                <div className={styles['collection-item']}>
                    
                    <div className={styles['collection-icon']}>
                        <Tenis/>
                    </div>

                    <div className={styles['item-text']}>
                        Tênis
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ColectionDestach