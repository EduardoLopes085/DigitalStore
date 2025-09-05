import styles from './header.module.css'
import logo from '../../assets/images/logo-header.svg'
import cart from '../../assets/images/cart.png'
import search from '../../assets/images/Search.png'
import nav from '../../assets/images/Menu.png'

function Header(){

    return(

        <header className={styles['header-container']}>
            
            <div className={styles['header-wrap']}>

                <div className={styles['header-top']}>

                    <img src={nav} className={styles['navigation-mobile']} alt="botão de abrir o menu de navegação mobile " />

                    
                    <a href="#" className={styles['shop-logo']}>
                        <img src={logo} alt="logo da Digital Store" />
                    </a>
                    

                    <input type="text" className={styles['search-input']}  placeholder='Pesquisar produto...'/>

                    <img src={search} alt="imagem de uma lupa" className={styles['search-mobile']}/>

                    <a href="" className={styles['register-button']}> Cadastre-se </a>

                    <button className={styles['login-button']}> Entrar </button>

                    <a className={styles['cart-button']} href="#">
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