import React from 'react'
import { connect } from 'react-redux'
import HomeIcon from '../icons/Home'
import { useLocation } from 'wouter'
import BagIcon from '../icons/Bag'
import ArrowLefIcon from './icons/ArrowLeft'

function Alert(props) {
    const [, navigate] = useLocation()


    let quantityCounter = 0
    for (let i = 0; i < props.inCard.length; i++)
        quantityCounter += props.inCard[i].piece

    return (
        <div className="container-alert active">
            <div className={`alert `} >
                <div className="alert-item " onClick={() => navigate('/')}>
                    <HomeIcon />
                </div>
                {/* <div className="alert-item b" onClick={() => navigate('/cart')}>
                    <BagIcon />
                    <span className={`${quantityCounter > 0 ? `quantity-counter ${props.right}` : null}`} style={{ background: '#fff', color: '#000' }}>{quantityCounter > 0 ? quantityCounter : null}</span>
                </div> */}
                <div className="containerNavBottonItemCenter">
                    <div className="navBottomItemCenter" onClick={() => navigate('/cart')} >
                        <BagIcon />
                    <span className={`${quantityCounter > 0 ? `quantity-counter-two ${props.right}` : null}`} style={{ background: '#fff', color: '#000' }}>{quantityCounter > 0 ? quantityCounter : null}</span>
                    </div>
                </div>
                <div className="alert-item" onClick={() => window.history.back()}>
                    <ArrowLefIcon fill="#fff"/>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = state => {

    return {
        inCard: state.inCard,
        isCartMenuActivated: state.isCartMenuActivated
    }
}



export default connect(mapStateToProps)(Alert)