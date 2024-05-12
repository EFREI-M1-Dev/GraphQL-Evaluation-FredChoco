import './styles/_main.scss'
import React from "react";
import useMainController from './controller/controllerMain';

const App = (
    props:
        {
            page: React.ReactElement
        }) => {

    const m_mainController = useMainController();


    return (
        <>
            {/*<Header/>*/}
            {React.cloneElement(props.page, { mainController: m_mainController })}
            {/*<Footer/>*/}
        </>
    )
}

export default App