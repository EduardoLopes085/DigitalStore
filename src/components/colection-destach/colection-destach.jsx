import React from 'react';
import styles from '../colection-destach/colection-destach.module.css';
import camiseta from '../../assets/images/tshirtGray.svg'
import calca from '../../assets/images/calcaGray.svg'
import headphone from '../../assets/images/headphoneGray.svg'
import tenis from '../../assets/images/footGray.svg'

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
                        <img src={camiseta} alt="" />
                    </div>

                    <div className={styles['item-text']}>
                        Camisetas
                    </div>

                </div>

                <div className={styles['collection-item']}>
                    
                    <div className={styles['collection-icon']}>
                        <img src={calca} alt="" />
                    </div>

                    <div className={styles['item-text']}>
                        Calças
                    </div>

                </div>

                <div className={styles['collection-item']}>
                    
                    <div className={styles['collection-icon']}>
                        <img src={calca} alt="" />
                    </div>

                    <div className={styles['item-text']}>
                        Bonés
                    </div>

                </div>

                <div className={styles['collection-item']}>
                    
                    <div className={styles['collection-icon']}>
                        <img src={headphone} alt="" />
                    </div>

                    <div className={styles['item-text']}>
                        Headphones
                    </div>

                </div>

                <div className={styles['collection-item']}>
                    
                    <div className={styles['collection-icon']}>
                        <img src={tenis} alt="" />
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