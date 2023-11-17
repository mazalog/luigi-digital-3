import React, { useState } from "react";
import styles from "./header.module.scss";
import SearchIcon from "../icons/search";
import ShoppingCartIcon from "../ShoppingCartIcon";
import { useLocation } from "wouter";
import InstagramIcon from "../../icons/Instagram";
import ArrowLefIcon from "../icons/ArrowLeft";


export default function Header({ noSearch, noBack, bgSearch,header,categorie}) {


  const [, navigate] = useLocation()

  const [valuesForm, setValuesForm] = useState('')

  const handleInputChange = (e) => {
    setValuesForm(e.target.value.toUpperCase())
  }

  const onSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${valuesForm.toUpperCase()}`)
  }

  const determinate=(x)=>{
  
    switch(x){
      case 'PS3':
        return '3px solid #127eb4';
      case 'PS4':
        return '3px solid #127eb4';
      case 'PS5':
        return '3px solid #127eb4';
      case 'X360':
        return '3px solid #408d58';
      case 'XONE-XSERIES':
        return '3px solid #408d58';
      case 'NSWITCH':
        return '3px solid #c94325'
      default:
        return 'none';
  }
      
  }
  return (
    <nav className={styles.container}>
      <div className={ header? styles.logoContainer:styles.logoContainerTwo}>
        {!noBack && <div className={styles.logo} onClick={() => window.history.back()}>
          <ArrowLefIcon />
        </div>}

        <div className={styles.containerLogoImg} onClick={() => navigate('/')}>
          <img
            alt=""
            className={styles.logoImg}
            src="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2Flogo.png?alt=media&token=6854752e-68d0-4200-a1c3-22a7936fde09"
          />
        </div>
        <div className={styles.rightContentMobile}>
          <div
            onClick={() =>
              navigate('/cart')
            }
          >
            <ShoppingCartIcon />
          </div>
          <div className={styles.cartContainer}>
          </div>
        </div>
      </div>
      <div className={styles.rightMenu}>
        <div className={styles.menuContent} >

        </div>
        <div
          className={styles.background}
          onClick={() =>
            navigate('/cart')
          }
        />
      </div>
      {
        !noSearch && < div className={styles.searchContainer}
          style={{ 
          border: `${determinate(categorie)}`
          }}>
          <SearchIcon
            width={20}
            height={20}
            fill="grey"
            className={styles.searchIcon}
          />
          <form
            onSubmit={onSubmit}
          >
            <input
              className={styles.searchInput}
              placeholder="Busca Titulos y más"
              onChange={handleInputChange}
            />
          </form>
        </div>
      }

      <div className={styles.rightContent}>

        <div className={styles.cartContainer}>
          <div style={{ marginRight: '20px' }} onClick={() => window.open('https://www.instagram.com/luigi_digitall/')}>
            <InstagramIcon width={43} height={43} />
          </div>
          <div
            onClick={() =>
              navigate('/cart')
            }
          >
            <ShoppingCartIcon />
          </div>
        </div>

        <div className={styles.profileContainer}>
          <span>
            {" "}
            <span style={{ fontWeight: "normal" }}>

            </span>
          </span>
        </div>
      </div>
    </nav >
  );
}


