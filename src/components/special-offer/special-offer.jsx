import React from 'react'
import styles from './special-offer.module.css'
import BuyButton from '../buy-button/buy-button';
import imagem from '../../assets/images/Laye 1.png'

function SpecialOffer() {
  return (
    <div className={styles['special-offer-container']}>
        <div className={styles['special-offer-wrapper']}>

            <div className={styles['offer-image']}>
                <img src={imagem} alt="" />
            </div>

            <div className={styles['offer-text']}>
                <h1>Oferta especial</h1>

                <h2>Air Jordan edição de colecionador</h2>

                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                </p>

                

            </div>



        </div>
    </div>
  )
}

export default SpecialOffer