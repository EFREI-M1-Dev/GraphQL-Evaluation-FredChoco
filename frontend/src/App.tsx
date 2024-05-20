import {Outlet, useNavigation} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import "./styles/_main.scss";
import Notification from "./components/Notification/Notification";

const App = () => {
    const navigation = useNavigation();

    const isLoading = navigation.state === 'loading';

    return (
        <>
            <Header/>
            {isLoading ? <div>Loading...</div> : <Outlet/>}
            <Footer/>
            <Notification/>
        </>
    );
}

export default App;
