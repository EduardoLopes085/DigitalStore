import React from 'react'
import styles from '../Footer/footer.module.css'
import logo from '../../assets/icons/logo-footer.svg'
import LindedIn from '../../assets/icons/InBug-White.png';
import Git from '../../assets/icons/github-mark-white.png'

function Footer() {
  return (
    <footer className={styles['footer-container']}>
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
                      <a href="https://www.linkedin.com/in/eduardolopesdev/">
                        <img src={LindedIn} alt=""  style={{ width: '21px' }}/>
                      </a>
                      
                      <a href="https://github.com/EduardoLopes085">
                        <img src={Git} alt="" style={{ width: '21px' }}/>
                      </a>
                      
                    </div>

                </div>

                <div className={styles['info-column']}>
                   <h1>Informação</h1>

                  <a href="">
                    Sobre Drip Store
                  </a>
                  
                  <a href="">
                    Segurança
                  </a>
                  
                  <a href="">
                    Wishlist
                  </a>
                  
                  <a href="">
                    Blog
                  </a>
                  
                  <a href="">
                    Trabalhe conosco
                  </a>
                  
                  <a href="">
                    Meus Pedidos
                  </a>

                </div>

                <div className={styles['category-column']}>
                  <h1>Categorias</h1>

                  <a href="">
                    Camisetas
                  </a>
                  
                  <a href="">
                    Calças
                  </a>
                  
                  <a href="">
                    Bonés
                  </a>
                  
                  <a href="">
                    Headphones
                  </a>
                  
                  <a href="">
                    Tênis
                  </a>
                </div>

                <div className={styles['contact-column']}>
                  <h1>
                    Contato
                  </h1>

                  <p>
                    Av. Santos Dumont, 1510 - 1° andar - Aldeota, Fortaleza - CE, 60150-161
                  </p>

                  <p>
                    (85) 3051-3411
                  </p>
                </div>
            </div>

            <div className={styles['footer-bottom']}>
                @2022 Digital College
            </div>
        </div>
    </footer>
  )
}

export default Footer