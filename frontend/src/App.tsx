import './styles/_main.scss'
import React from "react";
import useMainController from './controller/controllerMain';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = (
    props:
        {
            page: React.ReactElement
        }) => {

    const m_mainController = useMainController();


    return (
        <>
            <Header/>
            {React.cloneElement(props.page, { mainController: m_mainController })}
            <Footer/>
        </>
    )
}

export default App