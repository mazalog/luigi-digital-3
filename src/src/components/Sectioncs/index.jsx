import React from "react"
import styles from "./section.module.scss"
import HelpIcon from "../icons/help"
import { useLocation } from "wouter"

const CategoryItem = ({ name, link, emoji, categorie }) => {

    const [, navigate] = useLocation()

    return (
        <>
            {
                name.toUpperCase() === categorie ? <>
                    <li className={styles.categoryItem} onClick={() => navigate(link)} style={{ background: '#000', color: '#fff' }}>
                        <a>
                            <span className={styles.emoji}>{emoji}</span>
                            <span className={styles.categoryName}>{name}</span>
                        </a>
                    </li>
                </> : <>
                    <li className={styles.categoryItem} onClick={() => navigate(link)}>
                        <a>
                            <span className={styles.emoji}>{emoji}</span>
                            <span className={styles.categoryName}>{name}</span>
                        </a>
                    </li>
                </>
            }

        </>

    )
}

export default function SectionsBar({ categorie }) {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Secciones</h2>
            <ul className={styles.categories}>
                <CategoryItem name="Ropa" categorie={categorie} link="/section/ropa" />
                <CategoryItem name="Calzado" categorie={categorie} link="/section/calzado" />
            </ul>
            <ul className={styles.categoriesMd}>
                <CategoryItem name="Ropa" categorie={categorie} link="/section/ropa" />
                <CategoryItem name="Calzado" categorie={categorie} link="/section/calzado" />
            </ul>
            <div className={styles.helpContainer} >
                <div className={styles.helpIcon}>
                    <HelpIcon width={18} height={18} />
                </div>
            </div>
        </div>
    )
}
