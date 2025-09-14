import React from 'react'
import styles from '../Footer/footer.module.css'

function Footer() {
  return (
    <div className={styles['footer-container']}>
        <div className={styles['footer-wrapper']}>

            <div className={styles['footer-top']}>
                <div className={styles['logo-column']}>

                </div>

                <div className={styles['info-column']}>
                    
                </div>

                <div className={styles['category-column']}>

                </div>

                <div className={styles['contact-column']}>

                </div>
            </div>

            <div className={styles['footer-bottom']}>
                @2022 Digital College
            </div>
        </div>
    </div>
  )
}

export default Footer