import React from "react";
import { useLocation } from "wouter";
import styles from "./horizontal.module.scss";
import { connect } from 'react-redux'

function HorizontalCard({
  bgColor,
  title,
  desc,
  image,
  href,
  bgImage,
  activeModal,
  modal,
  sizeAuto,
  ...props
}) {
  const [, navigate] = useLocation()
  

  if (activeModal) {
    return (
      <div
        className={styles.horizontalCard}
        style={{ backgroundImage: `url(${bgImage})` }}
        onClick={() => localStorage.getItem('vali') ? console.log('Ya Registrado') : modal()}
      >
        <div className={styles.textContainer}>
          <h3 style={{ textAlign: 'center', color: '#fff' }}>{title}</h3>
          <span className={styles.description}>{desc}</span>
        </div>
        {image && (
          <div className={styles.imageContainer}>
            <img className={styles.image} src={image} />
          </div>
        )}
      </div>
    )
  }
  if (sizeAuto) {
    return (
      <div
        className={styles.horizontalCard}
        style={{
  
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover', color: '#fff',
        }}
        onClick={() => navigate(href)}
      >
        <div
          className={styles.textContainer}
          style={{ padding: 0, marginRight: 0 }}
        >
          <h3 style={{ marginBottom: 0, fontSize: 30 ,
            textAlign: 'center'
          }}>{title}</h3>
        </div>
        <img className={styles.bgImage} src={image} />
      </div>
    )
  }
  if (!desc) {
    return (
      <div
        className={styles.horizontalCard}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'top',
          backgroundSize: 'cover', color: '#fff'
        }}

        // style={{ backgroundColor: bgColor || "" }}
        onClick={() => navigate(href)}
      >
        <div
          className={styles.textContainer}
          style={{ padding: 0, marginRight: 0 }}
        >
          <h3 style={{ marginBottom: 0, fontSize: 35 }}>{title}</h3>
        </div>
        <img className={styles.bgImage} src={image} />
      </div>

    )
  }
  return (
    <div

      className={styles.horizontalCard}
      style={{ backgroundImage: `url(${bgImage})` }}
      onClick={() => navigate(href)}
    >
      <div className={styles.textContainer}>
        <h3 style={{ textAlign: 'center', color: '#fff' }}>{title}</h3>
        <span className={styles.description}>{desc}</span>
      </div>
      {image && (
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} />
        </div>
      )}
    </div>
  )
}



const mapDispatchToProps = (dispatch) => {
  return {
    modal: () => {
      dispatch({ type: "ACTIVE_MODAL" })
    },

  }
}

export default connect(null, mapDispatchToProps)(HorizontalCard)

