import React from "react"
import styles from "./genders.module.scss"
import HelpIcon from "../icons/help"
import { useLocation } from "wouter"
import { connect } from 'react-redux'
import SortIcon from "src/icons/Sort"



const CategoryItem = (props) => {

    const [, navigate] = useLocation()

    return (
        <>
            {
                props.name.toUpperCase() === props.categorie ? <>
 
                    <li
                        className={styles.categoryItem}
                        onClick={() => props.onClick(props.name)}
                        style={{ background: `${props.filter}`, color: `${props.filter === '#000' ? '#fff' : '#fff'}` }}>
                        <a>
                            <span className={styles.categoryName}>{props.name==='FISICO'?'Fisicos':'Digitales'} </span>

                        </a>
                    </li>
                </> : <>
                    <li
                        className={styles.categoryItem}
                        onClick={() => props.onClick(props.name)}
                        style={{ background: `${props.filter}`, color: `${props.filter === '#000' ? '#fff' : '#fff'}` }}
                    >
                        <a>
                            <span className={styles.categoryName}>{props.name==='FISICO'?'Fisicos':'Digitales'}  </span>

                        </a>
                    </li>
                </>
            }
        </>
    )
}

function CategoriesBar(props) {

    const [location] = useLocation()
    return (
        <div className={styles.container}>

            <div className={styles.to} style={{ marginTop: '10px' }}>
                {/* <h2 className={styles.title}>Para</h2> */}
                <ul className={styles.categories} style={{ marginTop: '0', marginLeft: '30px' }}>
         
                    <CategoryItem
                        name="FISICO"
                        filter={props.gender === 'FISICO' ? '#000' : '#162129'}
                        categorie={props.categorie}
                        onClick={props.updateGender}
                    />
                    <CategoryItem
                        name="DIGITAL"
                        filter={props.gender === 'DIGITAL' ? '#000' : '#162129'}
                        categorie={props.categorie}
                        onClick={props.updateGender}
                    />
                </ul>
                <ul className={styles.categoriesMd} style={{ marginTop: '0', marginLeft: '30px' }}>
                    <CategoryItem
                        name="FISICO"
                        filter={props.gender === 'FISICO' ? '#000' : '#162129'}
                        categorie={props.categorie}
                        onClick={props.updateGender}

                    />
                    <CategoryItem
                        name="DIGITAL"
                        filter={props.gender === 'DIGITAL' ? '#000' : '#162129'}
                        categorie={props.categorie}
                        onClick={props.updateGender}
                    />
                </ul>
            </div>

            <div className={styles.helpContainer} >
                <div className={styles.helpIcon}>
                    <HelpIcon width={18} height={18} />
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateGender: (f) => {
            dispatch({ type: "UPDATE_GENDER", item: f })
        }
    }
}

const mapStateToProps = state => {
    return {
        gender: state.gender?state.gender:'FISICO',
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesBar)
