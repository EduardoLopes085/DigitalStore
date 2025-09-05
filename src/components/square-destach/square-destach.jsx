import React from 'react'
import styles from '../square-destach/square-destach.module.css'
import DiscountAlert from '../discount-alert/discountAlert';
import BuyButton from '../buy-button/buy-button';

function SquareDestach() {
  return (
    <div className={styles['square-destach']}>
        <div className={styles['square-container']}>
            <h1 className={styles['square-title']}>
                Coleções em Destaque
            </h1>

            <div className={styles['square-card-container']}>

                <div className={styles['square-card']}>
                    
                  
                  <DiscountAlert desconto='30%'/>

                  <BuyButton message="comprar" 
                  link="https://www.google.com/?hl=pt_BR&zx=1757037742483&no_sw_cr=1"
                  />  
                  

                </div>

                <div className={styles['square-card']}>
                    
                  
                  <DiscountAlert desconto='30%'/>

                  <BuyButton message="comprar" 
                  link="https://www.google.com/?hl=pt_BR&zx=1757037742483&no_sw_cr=1"
                  />  
                  

                </div>

                <div className={styles['square-card']}>
                    
                  
                  <DiscountAlert desconto='30%'/>

                  <BuyButton message="comprar" 
                  link="https://www.google.com/?hl=pt_BR&zx=1757037742483&no_sw_cr=1"
                  />  
                  

                </div>

            </div>


        </div>
    </div>
  )
}

export default SquareDestach;