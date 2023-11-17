import React from 'react'
import HomeIcon from '../../icons/Home'
import { useLocation } from 'wouter'
import BagIcon from '../../icons/Bag'
import styles from './navB.module.scss'
import { useCarrito } from '../../hooks/cart.hook'
import ArrowLefIcon from "../icons/ArrowLeft";

// import IconHeart from '../Icons/Heart'


export default function NavBottom({ displayCart, setDisplayCart }) {

    const [location, navigate] = useLocation()
    const { nCantidad } = useCarrito()

    return (
        <div className={styles.containerNavBottom}>
            <div className={styles.navBottom} >
                <div className={styles.navBottomItem}
                    style={{
                        background: `${location === '/' ? '#a06ac3' : 'transparent'}`,
                        borderStartEndRadius: `${location === '/' ? '20px' : '0px'}`,
                        borderEndEndRadius: `${location === '/' ? '20px' : '0px'}`,
                        borderStartStartRadius: `${location === '/' ? '10px' : '0px'}`,
                        borderEndStartRadius: `${location === '/' ? '10px' : '0px'}`
                    }}
                    onClick={() => navigate('/')}>
                    <HomeIcon />
                </div>
                <div className={styles.containerNavBottonItemCenter}>
                    <div className={styles.navBottomItemCenter} onClick={() => setDisplayCart({ transform: "translate3d(0vw, 5vh, 0)" })}>
                        <BagIcon />
                        <span className={`${nCantidad > 0 ? `quantity-counter ` : null}`} style={{ background: '#734c8d', color: '#fff' }}>{nCantidad > 0 ? nCantidad : null}</span>
                    </div>
                </div>
                <div
                    style={{
                        background: `${location === '/myfavorites' ? '#a06ac3' : 'transparent'}`,
                        borderStartEndRadius: `${location === '/myfavorites' ? '10px' : '0px'}`,
                        borderEndEndRadius: `${location === '/myfavorites' ? '10px' : '0px'}`,
                        borderStartStartRadius: `${location === '/myfavorites' ? '20px' : '0px'}`,
                        borderEndStartRadius: `${location === '/myfavorites' ? '20px' : '0px'}`
                    }}
                    className={styles.navBottomItem} onClick={() => navigate('/myfavorites')}>
                    <ArrowLefIcon />
                </div>
            </div>
        </div>
    )
}