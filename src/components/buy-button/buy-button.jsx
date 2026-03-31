import React from 'react'
import styles from './buy-button.module.css'

function BuyButton(props) {
  return (
    <a className={styles['buy-button']} href={props.link} style={{'--bg-color' : props.color}}>
        {props.message}
    </a>
  )
}

export default BuyButton