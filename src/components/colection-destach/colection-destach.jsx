import React from 'react';
import styles from '../colection-destach/colection-destach.module.css';

function ColectionDestach() {
  return (
    <div className={styles['collection-destach']}>
        <div className={styles['collection-container']}>
            <div className={styles['collection-title']}>
                Coleções em destaque
            </div>
            <div className={styles['collection-row']}>

                <div className="colection-item">
                    
                    <div className={styles['collection-icon']}>

                    </div>

                    <div className={styles['item-text']}>

                    </div>

                </div>

                <div className="colection-item">
                    
                    <div className={styles['collection-icon']}>

                    </div>

                    <div className={styles['item-text']}>

                    </div>

                </div>

                <div className="colection-item">
                    
                    <div className={styles['collection-icon']}>

                    </div>

                    <div className={styles['item-text']}>

                    </div>

                </div>

                <div className="colection-item">
                    
                    <div className={styles['collection-icon']}>

                    </div>

                    <div className={styles['item-text']}>

                    </div>

                </div>

                <div className="colection-item">
                    
                    <div className={styles['collection-icon']}>

                    </div>

                    <div className={styles['item-text']}>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ColectionDestach