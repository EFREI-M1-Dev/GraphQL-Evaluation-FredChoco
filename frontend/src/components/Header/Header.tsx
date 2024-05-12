import styles from "./_Header.module.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const Header = (
    // props:
    //     {
    //         className?: string;
    //     }
) => {

    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <Logo size={"small"} glow={true}/>
                <Button style={"header"} route={"search"}> [SEARCH] </Button>
                <Button style={"header"} route={"random"}> [RANDOM] </Button>
            </div>
        </div>
    )
}
export default Header;
