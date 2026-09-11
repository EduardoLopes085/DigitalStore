import React from 'react'
import styles from './filter.module.css'
import sneakers from '../../mocks/Sneakers';

function Filter() {
    const marcas = [...new Set(sneakers.map(sneaker => sneaker.brand))];

    const categoria = [...new Set(sneakers.map(sneaker => sneaker.categoria))];
    const genero = [...new Set(sneakers.map(sneaker => sneaker.gender))];
    const estado = ['Novo', 'Usado'];
  
    return (
    <div className={styles['filter-container']}>
        <div className={styles['filter-wrapper']}>
            <h1 className={styles['filter-title']}>
                Filtrar por
            </h1>


            <div className={styles['marca-fildset']}>
            <h1 className={styles['class-fieldset']}>
                Marca
            </h1>

            {marcas.map((marca, index) => {
                const id = `marca-${index}`;
            return (
                <div key={id}>
                    <div className={styles['field-item']}>
                        <input
                            type="checkbox"
                            name="Marca"
                            id={id}
                        />
                        <label htmlFor={id}>{marca}</label>
                    </div>
                </div>
            );
            })}
        </div>
            

        <div className={styles['categoria-fildset']}>
            <h1 className={styles['class-fieldset']}>
                Categoria
            </h1>
            {categoria.map((categoria, index) =>{
                const id = `categoria-${index}`
                return(
                    <div key={id} className={styles['field-item']}>
                        <input type="checkbox" name="Categoria" id={id} />
                        <label htmlFor={id}> {categoria} </label>
                    </div>
                );
            })}
            
        </div>

        <div className={styles['genero-fildset']}>
            <h1 className={styles['class-fieldset']}>
                Gênero
            </h1>

            
            {genero.map((genero, index)=>{
                const id = `genero-${index}`
                return (
                    <div key={id} className={styles['field-item']}>
                        <input type="checkbox" name="Categoria" id={id} />
                        <label htmlFor={id}> {genero} </label>
                    </div>
                )
            })}
            
        </div>

        {/* <div className={styles['estado-fildset']}>
            <h1 className={styles['class-fieldset']}>
                Estado
            </h1>

            
            <div className={styles['field-item-column']}>
                {estado.map((estado, index)=>{
                    const id = `estado-${index}`
                    return(
                        <div>
                            <input type="radio" name="estado" id={id} />
                            <label htmlFor={id}> {estado} </label>
                        </div>
                    )
                })}
            </div>
            
        </div> */}
        </div>
    </div>
  )
}

export default Filter