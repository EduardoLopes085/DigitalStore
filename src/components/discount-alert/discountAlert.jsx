import React from 'react'
import styles from '../discount-alert/discount-alert.module.css'

function DiscountAlert(props) {
  return (
    <div className={styles['discount-alert']}>
        {props.desconto}
    </div>
  )
}

export default DiscountAlert