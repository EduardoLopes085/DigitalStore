import React from 'react'
import styles from '../discount-alert/discount-alert.module.css'

function DiscountAlert(props) {
  if (!props.desconto || props.desconto <= 0) return null;
  
  return (
    <div className={styles['discount-alert']}>
        {props.desconto}% OFF
    </div>
  )
}

export default DiscountAlert