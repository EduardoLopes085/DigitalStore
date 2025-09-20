import React from 'react'
import styles from './login-form.module.css'
import sneaker from '../../assets/backgrounds/pexels-melvin-buezo-2529148 1.png'
import sneaker2 from '../../assets/backgrounds/pexels-melvin-buezo-2529148 2.png'

function LoginForm() {
  return (
    <section className={styles['register-container']}>
        <div className={styles['register-wrapper']}>

            <div className={styles['register-form']}>
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
                        <input type="text" id='password-input' placeholder='Insira sua senha'/>
                    </div>

                    <a href="#" className={styles['forgot-password']} >
                        Esqueci minha senha
                    </a>

                    <button>
                        Acessar Conta
                    </button>

                    <div>
                        Ou faça login com
                    </div>
                </form>

                


            </div>
            
            <div className={styles['image-wrapper']}>
                <div >
                    <img src={sneaker} alt="" />
                </div>

                <div>
                    <img src={sneaker2} alt="" />
                </div>
            </div>

        

        </div>
    </section>
  )
}

export default LoginForm