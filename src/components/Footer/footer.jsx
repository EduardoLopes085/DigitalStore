import React from 'react'
import styles from '../Footer/footer.module.css'
import logo from '../../assets/icons/logo-footer.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'

function Footer() {
  return (
    <div className={styles['footer-container']}>
        <div className={styles['footer-wrapper']}>

            <div className={styles['footer-top']}>
                <div className={styles['logo-column']}>
                    <img src={logo} alt="" />

                    <p className={styles['logo-text']}>
                      Lorem ipsum dolor sit amet, consectetur 
                      adipiscing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore.
                    </p>

                    <div className={styles['social-row']}>
                      <img src={facebook} alt="" />
                      
                      <img src={instagram} alt="" />
                      
                      <img src={twitter} alt="" />
                    </div>

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