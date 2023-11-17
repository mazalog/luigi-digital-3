import React from 'react'
import styles from './footer.module.scss'

export default function Footer({ bgFooter }) {

    return (
        <div style={{ background: '#000' }}>
            {
                bgFooter ? <footer className={styles.container__Footer}>
                    <div>
                        <h4>Luigi Digital</h4>
                        <p className={styles.text}>
                            Copyright 2021 © Luigi Digital. All rights reserved.
                        </p>
                    </div>
         
                    <div  style={{marginBottom:'90px'}} >
                        <h4>Hecho por @MAZA_VE</h4>
                    </div>
                </footer> : <footer className={styles.container__Footer}>
                    <div className={styles.contentFooter}>

                        <div>
                            <ul>
                                <h4>Nuestras categorias</h4>
                                <li>PlayStation 3</li>
                                <li>PlayStation 4</li>
                                <li>Xbox 360</li>
                                <li>Xbox ONE y SERIES s/x</li>
                                <li>Nintendo Switch</li>
                                <li>Juegos Retro</li>
                                <li>Controles y Accesorios</li>
                                <li>Suscripciones</li>
                            </ul>
                        </div>
                        <div>
                        <ul>
                                {/* <h4>Nuestras politicas</h4>
                                <li>Politica de devoluciones</li>
                                <li>Terminos y condiciones</li>
                                <li>Politica de privacidad</li>
                                <li>Politica de envio</li> */}
                            </ul>
                        </div>
                        <div>
                        <h4>Sobre nosotros</h4>
                        <p className={styles.text}>
                          Más de 10 años de experiencia ofreciendo los mejores productos con el mejor servicio
                        </p>
                        <div styles={{marginBottom:'90px'}}>
                    </div>
                        </div>
                        <div>
                        <h4>Luigi Digital</h4>
                        <p className={styles.text}>
                            Copyright 2021 © Luigi Digital. All rights reserved.
                        </p>
                        <div styles={{marginBottom:'90px'}}>
                        <h4>Hecho por @MAZA_VE</h4>
                    </div>
                        </div>
                    </div>
              

                </footer>
            }
            <div className={styles.by}>
            </div>
        </div>
    )
}
