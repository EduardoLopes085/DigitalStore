import styles from './header.module.css'
import logo from '../../assets/images/logo-header.svg'
import cart from '../../assets/images/cart.png'


function Header(){

    return(

        <header className={styles['header-container']}>
            
            <div className={styles['header-wrap']}>

                <div className={styles['header-top']}>

                    <img src={logo} alt="logo da Digital Store" className={styles['shop-logo']}/>

                    <input type="text" className={styles['search-input']}  placeholder='Pesquisar produto...'/>

                    <a href="" className={styles['register-button']}> Cadastre-se </a>

                    <button className={styles['login-button']}> Entrar </button>

                    <a className={styles['cart-button']} href="">
                        <img src={cart} alt="imagem de um carrinho de compras" />
                    </a>
                </div>

                <div className={styles['header-bottom']}>
                    
                    <nav className={styles['header-nav']}>
                        <a href="#" className={styles['navigation-item']}>
                            Home
                        </a>
                        
                        <a href="#" className={styles['navigation-item']}>
                            Produtos
                        </a>
                        
                        <a href="#" className={styles['navigation-item']}>
                            Categorias
                        </a>
                        
                        <a href="#" className={styles['navigation-item']}>
                            Meus Pedidos
                        </a>
                    </nav>

                </div>

            </div>


        </header>

    );


}

export default Header;