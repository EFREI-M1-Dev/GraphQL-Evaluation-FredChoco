import styles from "./_Home.module.scss";
import Button from "../../components/Button/Button";
// import {UseMainControllerReturnType} from "../../controller/controllerMain";

const HomePage = (
    // props:
    //     {
    //         mainController?: UseMainControllerReturnType;
    //     }
        ) => {

    return (
            <div className={styles.container}>
                <Button style={"primary"} route={"test"} > Hello World </Button>
            </div>
        );
};

export default HomePage;