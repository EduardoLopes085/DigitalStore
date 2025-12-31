import React from 'react'
import styles from './login-form.module.css'
import sneaker from '../../assets/backgrounds/pexels-melvin-buezo-2529148 1.png'
import sneaker2 from '../../assets/backgrounds/pexels-melvin-buezo-2529148 2.png'
import gmail from '../../assets/icons/gmail_vetor.png'
import facebook from '../../assets/icons/facebook_vetor.png'

function LoginForm() {
  return (
    <section className={styles['login-container']}>
        <div className={styles['login-wrapper']}>

            <div className={styles['login-form']}>
                <div>
                    <h3>Acesse sua conta</h3>
                    
                    <div>
                        Novo cliente? Então registre-se <a href="">aqui</a>
                    </div>
                    <form action="#">
                        <div className={styles['login-row']}>
                            <label htmlFor="email-input">Login*</label>
                            <input type="text" id='email-input' placeholder='Insira seu login ou email'/>
                        </div>
                        <div className={styles['password-row']}>
                            <label htmlFor="password-input">Senha*</label>
                            <input type="password" id='password-input' placeholder='Insira sua senha'/>
                        </div>
                        <a href="#" className={styles['forgot-password']} >
                            Esqueci minha senha
                        </a>
                        <button className={styles['login-button']} type='submit'>
                            Acessar Conta
                        </button>
                        <div className={styles['auther-login']}>
                            Ou faça login com
                            <img src={gmail} alt="logo g-mail" />
                            <img src={facebook} alt="logo facebook" />
                        </div>
                    </form>
                </div>
            </div>
            
            <div className={styles['image-wrapper']}>
                <div >
                    <img src={sneaker} alt="imagem de tênis flutuante" />
                </div>

                <div className={styles['margin-top']}>
                    <img src={sneaker2} alt="imagem de tênis flutuante" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default LoginForm