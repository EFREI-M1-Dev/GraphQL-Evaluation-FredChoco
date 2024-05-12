import styles from "./_Home.module.scss";
// import {UseMainControllerReturnType} from "../../controller/controllerMain";

const HomePage = (
    // props:
    //     {
    //         mainController?: UseMainControllerReturnType;
    //     }
        ) => {

    return (
            <div className={styles.container}>
                <h1>Home Page</h1>
            </div>
        );
};

export default HomePage;