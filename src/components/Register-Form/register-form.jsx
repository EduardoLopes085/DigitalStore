import React from 'react';
import styles from './regiter-form.module.css';
import { IMaskInput } from "react-imask";


function RegisterForm() {
  return (
    <section className={styles['register-section']}>
        <div className={styles['register-wrapper']}>
            <div>
                <h1>Criar Conta</h1>

                <form action="">
                    <fieldset>
                        {/* <legend>Informações Pessoais</legend> */}

                        <h1>Informações pessoais</h1>

                        <div className={styles['field-row']}>
                            <label htmlFor="">Nome Completo*</label>
                            <input type="text" placeholder='Insira seu nome' required/>
                        </div>

                        <div className={styles['field-row']}>
                        <label htmlFor="cpf-input">CPF*</label>
                        <IMaskInput
                            mask="000.000.000-00"
                            id="cpf-input"
                            placeholder="Insira seu CPF"
                            type="text"
                            required
                        />
                        </div>

                        <div className={styles['field-row']}>
                            <label htmlFor="">E-mail*</label>
                            <input type="email" placeholder='Insira seu e-mail' required/>
                        </div>

                        <div className={styles['field-row']}>
                            <label htmlFor="">Celular*</label>
                            <IMaskInput
                                mask="(85) 90000-0000"
                                id="celular-input"
                                placeholder="Insira seu celular"
                                type="text"
                                required
                            />
                        </div>

                    </fieldset>

                    <fieldset>
                        {/* <legend>Informações de Entrega</legend> */}

                        <h1>Informações de entrega</h1>

                        <div className={styles['field-row']}>
                            <label htmlFor="">CEP*</label>
                            
                            <IMaskInput
                                mask="00000-000"
                                id="cep-input"
                                placeholder="Insira seu cep"
                                type="text"
                                required
                            />
                        </div>

                        <div className={styles['field-row']}>
                            <label htmlFor="">RUA*</label>
                            <input type="text" placeholder='Insira sua rua' required/>
                        </div>

                        <div className={styles['field-row']}>
                            <label htmlFor="">Bairro*</label>
                            <input type="text" placeholder='Insira seu bairro' required/>
                        </div>

                        <div className={styles['field-row']}>
                            <label htmlFor="">Cidade*</label>
                            <input type="text" placeholder='Insira sua cidade' required/>
                        </div>

                        <div className={styles['field-row']}>
                            <label htmlFor="">Complemento</label>
                            <input type="text" placeholder='Insira complemento'/>
                        </div>

                    </fieldset>

                    <div className={styles['checkbox-row']}>
                        <input type="checkbox" name="ofertas-email" id="ofertas-checkbox" />
                        <label htmlFor="ofertas-checkbox" className={styles['checkbox-text']}>
                            Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
                        </label>
                    </div>

                    <button type="submit" className={styles['register-button']}>
                        Criar Conta
                    </button>

                </form>
            </div>
        </div>
    </section>
);
}

export default RegisterForm