import React from 'react'
import styles from './position-button.module.css'

function PositionButton(props) {
  return (
    <a className={`${styles['position-button']} ${props.comboClass || ""}`} href={props.link}>
        {props.message}
    </a>
  )
}

export default PositionButton