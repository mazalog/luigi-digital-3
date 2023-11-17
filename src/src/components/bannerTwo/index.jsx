import React, { useEffect, useState } from "react";
import styles from "./banner.module.scss";
import { useLocation } from "wouter";
import StartIcon from '../icons/StartIcon'
import MaleIcon from "../icons/MaleIcon";
import FemaleIcon from "../icons/FemaleIcon";
import Skeleton from "../Placeholders/ImgArticle/Skeleton";
import ButtomAdd from "../ButtomAdd";

export default function VerticalCardTwo({
  bgColor,
  name,
  price,
  image,
  href,
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
      <div
        className={styles.verticalCard}
         onClick={()=>navigate(href)}
      >              
        <div className={styles.imageContainer}>
          {image && <>
        
                    <img
                    className={styles.image}
                    src={image}
                    loading="lazy"
                   
                    alt=""
                  /> 
          </>}
        </div>
      </div>
{/* 
      <div
        className={styles.verticalCard}
        onClick={() => navigate("/article/62717322c4d96d0016ea4cd3")}
      >
        <div className={styles.imageContainer}>
          {image && <>

            <img
              className={styles.image}
              src="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2FRECURSOS%20DE%20PAGINA%2FWhatsApp%20Image%202022-08-01%20at%207.15.18%20PM.jpeg?alt=media&token=abaad4c3-3e9d-408f-86a9-9048522a1744"
              loading="lazy"

              alt=""
            />
          </>}
        </div>
      </div> */}
    </>
  );
}
