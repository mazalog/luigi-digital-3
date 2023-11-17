import React from "react";
import styles from "./layout.module.scss";
import Header from "../Header";
import HorizontalCard from "../bannerTwo/index.jsx";
import CategoriesBar from "../Categories";
import SectionsBar from "../Sectioncs";
import Alert from "../Alert";
import Footer from '../Footer'
import GendersBar from "../genders";
import Modal from '../Modal'
import FormModal from "../FormModal";
import { connect } from 'react-redux';

function Layout({ children,
  noCategories,
  bg,
  noAlert,
  categorie,
  bgFooter,
  header,
  bgSearch,
  noSearch,
  brands, modal, closeModal, addUser }) {


  return (
    <>
      {
        bg ? <div className={styles.containerTwo} >
          <div className={styles.content}>
            <Header noSearch={noSearch} bgSearch={bgSearch} categorie={categorie} header={header} />
            <div className={styles.main}>

              <div className={styles.navElements}>
                {brands && <CategoriesBar />}

                {brands && <GendersBar />}
              </div>
              {children}
            </div>
          </div>
        </div> : <div className={styles.container} >
          <div className={styles.content}>
            <Header noSearch={noSearch} bgSearch={bgSearch} categorie={categorie} header={header} />
            <div className={styles.main}>
              <div className={styles.navElements}>
                {/* {!noCategories && <SectionsBar categorie={categorie} />} */}
                {categorie === 'XONE-XSERIES' ?
                  <HorizontalCard
                    bgColor="#f6f6f6s"
                    href="/article/62717322c4d96d0016ea4cd3"
                    name="Xbox Game Pass Ultímate : 300 Juegos + Live Gold"
                    image="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2FRECURSOS%20DE%20PAGINA%2FWhatsApp%20Image%202022-08-01%20at%207.15.18%20PM.jpeg?alt=media&token=abaad4c3-3e9d-408f-86a9-9048522a1744"
                  /> : <></>
                }

                {categorie === 'PS4' ?
                  <HorizontalCard
                    bgColor="#f6f6f6s"
                    href="/SECTION/PS4"
                    name="Juegos para PS4"
                    image="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2FRECURSOS%20DE%20PAGINA%2FPS4.jpeg?alt=media&token=4bdba3b8-bed8-4503-8719-a9a299ccbffe"
                  /> : <></>
                }
                {categorie === 'PS3' ?
                  <HorizontalCard
                    bgColor="#f6f6f6s"
                    href="/SECTION/PS3"
                    name="Juegos para PS3"
                    image="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2FRECURSOS%20DE%20PAGINA%2FPS3.jpeg?alt=media&token=bb686b4b-e3ce-4afd-ae52-a23f9417847d"
                  /> : <></>
                }
                {brands && <CategoriesBar />}
                {brands && <GendersBar />}

              </div>
              {children}
            </div>
          </div>
        </div>
      }
      <Footer bgFooter={bgFooter} />
      <div style={{ textAlign: 'center' }}>
        {!noAlert && <Alert />}
      </div>
      {/* {
        modal ? <Modal onClose={closeModal}>

          <h3 className="title-modal">SUSCRIBETE PARA PROMOCIONES Y MAS!</h3>
          <div className="container-form-modal">
            <FormModal addUser={addUser} />
          </div>
        </Modal> : <></>
      } */}

    </>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch({ type: "DESACTIVE_MODAL" })
    },
    addUser: (props) => {
      dispatch({ type: "DESACTIVE_MODAL" })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

