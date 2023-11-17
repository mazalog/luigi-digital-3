import React, { useState } from "react"
import styles from "./categories.module.scss"
import HelpIcon from "../icons/help"
import { connect } from 'react-redux'
import AdidasIcon from "../icons/AdidasIcon"
import JordanIcon from "../icons/JordanIcon"
import PradaIcon from "../icons/PradaIcon"
import BalenciagaIcon from "../icons/BalenciagaIcon"
import UnderArmourIcon from "../icons/UnderArmourIcon"
import NikeIcon from "../icons/NikeIcon"
import { useLocation } from "wouter"
import GivenchyIcon from "../icons/Givenchy"
import LouisIcon from "../icons/LouisIcon"
import GucciIcon from "../icons/GucciIcon"
import VansIcon from "../icons/VansIcon"
import ConverseIcon from "../icons/ConverseIcon"
import DolceIcon from "../icons/DolceIcon"
import AlexanderIcon from "../icons/Alexander"
import PumaIcon from "../icons/PumaIcon"
import LebronIcon from '../icons/LebronIcon'
import ChanelIcon from '../icons/ChanelIcon'
import ValentinoIcon from '../icons/ValentinoIcon'



function CategoriesBar(props) {

  const [location] = useLocation()
  const [categorieGlobal, setCategorieGlobal] = useState('')

  const handleSelectChange = (e) => {
    props.updateFilter(e.target.value)
  }


  const categories=[
    'Niños','Terror','Carreras','Shooters','Peleas','Mundo abierto','Aventuras','Deportivos'
  ]

  return (
    <div className="filters">

    <div className="container-select-categorie">
        <select className="select-categorie" onChange={handleSelectChange}>
            {/* <optgroup> */}
            <option value="">Selecciona genero</option>
            {
              categories.map(item=> <option value={item}  key={item} >{item}</option>)
            }
        </select>
    </div>

</div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (f) => {
      dispatch({ type: "UPDATE_FILTER", item: f })
    }
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesBar)
