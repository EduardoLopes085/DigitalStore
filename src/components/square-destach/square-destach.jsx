import React from 'react'
import styles from '../square-destach/square-destach.module.css'

function SquareDestach() {
  return (
    <div className={styles['square-destach']}>
        <div className={styles['square-container']}>
            <h1 className={styles['square-title']}>
                Coleções em Destaque
            </h1>

            <div className={styles['square-card-container']}>

                <div className={styles['square-card']}>
                    


                </div>

                <div className={styles['square-card']}>

                    

                </div>

                <div className={styles['square-card']}>

                    

                </div>

            </div>


        </div>
    </div>
  )
}

export default SquareDestach;