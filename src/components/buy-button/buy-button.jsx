import React from 'react'
import styles from '../buy-button/buy-button.module.css'

function BuyButton(props) {
  return (
    <a className={styles['buy-button']} href={props.link}>
        {props.message}
    </a>
  )
}

export default BuyButton