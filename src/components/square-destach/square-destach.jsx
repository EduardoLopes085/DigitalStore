import React from 'react'
import styles from '../square-destach/square-destach.module.css'
import DiscountAlert from '../discount-alert/discountAlert';
import PositionButton from '../position-button/position-button';

function SquareDestach() {
  const cards = [
    { modifier: 'square-card--supreme', desconto: '30% OFF' },
    { modifier: 'square-card--adidas', desconto: '30% OFF' },
    { modifier: 'square-card--bass', desconto: '30% OFF' },
  ];

  return (
    <section className={styles['square-destach']}>
      <div className={styles['square-container']}>
        <h2 className={styles['square-title']}>
          Coleções em Destaque
        </h2>

        <div className={styles['square-card-container']}>
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`${styles['square-card']} ${styles[card.modifier]}`}
            >
              <DiscountAlert desconto={card.desconto} />
              <PositionButton 
                message="comprar" 
                link="https://www.google.com/?hl=pt_BR"
                comboClass={styles['button-configuration']}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SquareDestach;