import {Outlet} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import "./styles/_main.scss";

const App = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default App;
