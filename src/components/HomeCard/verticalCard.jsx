import React, { useEffect, useState } from "react";
import styles from "./vertical.module.scss";
import { useLocation } from "wouter";
import StartIcon from '../icons/StartIcon'
import MaleIcon from "../icons/MaleIcon";
import FemaleIcon from "../icons/FemaleIcon";
import Skeleton from "../Placeholders/ImgArticle/Skeleton";
import ButtomAdd from "../ButtomAdd";

export default function VerticalCard({
  bgColor,
  brand,
  name,
  price,
  sale_price,
  image,
  border,
  start,
  href,
  gender,
  desc,
  item,
  onC,  
  section,
  ...props
}) {
  
  const [, navigate] = useLocation()
  const [imgLoading, setImgLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setImgLoading(false)
    }, 1000)
  }, [])
  return (
    <>
      {
      gender==='FISICO'?<>{ imgLoading && <Skeleton />}</>:<></>
     }
      <div
        className={styles.verticalCard}
        style={{ display: `${imgLoading ? 'none' : 'block'}`,minHeight: `${gender==='FISICO'?'200px':'0px'}` }}
      > 
      {
        gender==='FISICO'?<button className={styles.favContainer}>
        {/* -{(((price - sale_price) / price) * 100) | 0}% */}
        {gender}
      </button>:<></>
      }
              
          
        
        <button className={styles.add} >+</button>
        <ButtomAdd styles={styles} item={item} selectedPhoto={0}/>
        {
          gender==='FISICO'?<>
        <div className={styles.imageContainer}>
          {imgLoading && <Skeleton />}
          {image && <>
        
                    <img
                    className={styles.image}
                    src={image}
                    loading="lazy"
                    onClick={onC ? () => window.open(onC) : () => navigate(href)}
                    alt=""
                  // style={{ display: `${imgLoading ? 'none' : 'block'}` }}
                  /> 
          </>}

          {/* <span className={styles.add}>+</span> */}
        </div>
          </>:<></>
        }

        <div className={styles.textContainer}
        style={{minHeight: `${gender==='FISICO'?'100px':'0px'}`}}
        >
        {gender==='DIGITAL'?<>
        <div
                    onClick={onC ? () => window.open(onC) : () => navigate(href)}

        style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)'}}
        >
          <h4 style={{gridColumn:'span 2'}}>{name}</h4>
          {/* <span>{section}</span> */}
          <span style={{color:'gray'}}>${price}</span>

          </div>
        </>:<>
        <h4>{name}</h4>
        
        </>}

     {gender==='FISICO'?<>
     <span>{section}</span>
          {sale_price ? (
            <div className={styles.priceContainer}>
              <div className={styles.prices}>
                <span className={styles.priceText}>${price}</span>
                <div className={styles.containerStartandSale}>
                  <span className={styles.salePriceText}>${sale_price}</span>
                  <div>
                    {
                      start !== 0 ? <>   <span>PS5</span> </> : <></>
                    }

                  </div>
                  <div>
                    {/* {
                      gender === 'CABALLERO' ? <MaleIcon /> : <FemaleIcon />
                    } */}

                  </div>
                </div>
              </div>
            </div>
          ) : (<div className={styles.price_and_starts}>
            <span className={styles.salePriceText}>${price || 0}</span>
            <div>
              {
                start !== 0 ? <>   <span>PS5</span> </> : <></>
              }
            </div>
            {/* <div>
              {
                gender === 'CABALLERO' ? <MaleIcon /> : gender === 'DAMA' ? <FemaleIcon /> : <></>
              }
            </div> */}
          </div>
          )}
     </>:<></>}


        </div>
      </div>
    </>
  );
}
