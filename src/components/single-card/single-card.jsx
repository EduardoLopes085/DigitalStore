import SwiperProduct from '../SwiperProduct/SwiperProduct'
import styles from './single-card.module.css'
import stars from '../../assets/icons/Stars.png'
import star from '../../assets/icons/Star1.png'
import BuyButton from '../buy-button/buy-button'

function SingleCard() {
    
    

    return (
    <div className={styles.container}>
       <div className={styles.wrapper}>
            <div className={styles.swiperContainer}>
                <SwiperProduct/>
            </div>

            <div className={styles.informationContainer}>
                
                <h1 className={styles.productName}>
                    Tênis Nike Revolution 6 Next Nature Masculino 
                </h1>

                <span className={styles.productSpan}> 
                    Casual | Nike | Ref: 38416711 
                </span>

                <span className={styles.productAvaliation}>
                    <img src={stars} alt="icone de estrelas simbolizando a avaliação do produto" />

                    <div className={styles.productStar}>
                        4.7 <img src={star} alt="" />    
                    </div>

                    <p className={styles.avaliationCount}>
                        (90 avaliações)
                    </p>

                </span>


                <div className={styles.productPrice}>
                    
                    <div className={styles.priceWrapper}>
                        <span className={styles.moeda}>
                            R$
                        </span>
                        <h1 className={styles.price}>
                            219
                        </h1>
                        <span className={styles.cents}>
                            ,00
                        </span>

                        <span className={styles.tash}>
                            219,00
                        </span>
                    </div>
                </div>

                <div className={styles.productDescription}>
                    
                    <h1 className={styles.title}>
                        Descrição do Produto
                    </h1>
                    
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </p>
                </div>

                <div className={styles.sizeSelector}>
                    <h1 className={styles.sizeHead}>
                        Tamanho 
                    </h1>

                    <div className={styles.sizeRow}>

                        <div className={styles.sizeOption}>
                            39
                        </div>

                        <div className={styles.sizeOption}>
                            40
                        </div>

                        <div className={styles.sizeOption}>
                            41
                        </div>

                        <div className={styles.sizeOption}>
                            42
                        </div>
                        

                    </div>
                </div>

                <div className={styles.sizeSelector}>
                    <h1 className={styles.sizeHead}>
                        Cor 
                    </h1>

                    <div className={styles.sizeRow}>

                        <div className={styles.colorOption}>
                            
                        </div>

                        <div className={styles.colorOption}>
                            
                        </div>

                        <div className={styles.colorOption}>
                            
                        </div>

                        <div className={styles.colorOption}>
                            
                        </div>

                    </div>
                </div>

                <div className={styles.buttonContainer}>
                    <BuyButton
                        message = "comprar"
                        link = "www.google.com.br/"
                        color = "#FFB31F"
                    />
                </div>
            </div>
       </div>
    </div>
  )
}

export default SingleCard