import styles from "./_Header.module.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useAuth} from "../../provider/AuthContext";
import {gql, useLazyQuery} from "@apollo/client";

const RANDOM_POST = gql`
query RANDOM_POST_QUERY {
  getRandomPost {
    id
  }
}
`;

const Header = () => {

    const [widthScrollBar, setWidthScrollBar] = useState(0);
    const [randomPostId, seRandomPostId] = useState(0);
    const navigate = useNavigate();

    const handleScroll = () => {
        const scrollBar = document.querySelector(`.${styles.scrollBar}`);
        if (scrollBar) {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const width = window.scrollY / scrollHeight * 100;
            setWidthScrollBar(width);
        }
    }

    const [fetchRandomPost, {data}] = useLazyQuery(RANDOM_POST);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (data && data.getRandomPost) {
            seRandomPostId(data.getRandomPost.id);
        }
    }, [data]);

    const handleRandomPostClick = () => {
        fetchRandomPost().then().catch((e) => console.log(e));
    };

    useEffect(() => {
        if (randomPostId) {
            window.location.href = `/post/${randomPostId}`;
        }
    }, [randomPostId]);

    const {loggedIn, logout} = useAuth();

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <Link to={"/"} className={styles.link}>
                    <Logo size={"small"} glow={true}/>
                </Link>
                <Button style={"header"} route={"search"}> [SEARCH] </Button>
                <Button style={"header"} onClick={handleRandomPostClick}> [RANDOM] </Button>
            </div>
            {!loggedIn ?
                <div className={styles.section}>
                    <Button style={"header"} route={"login"}> [LOGIN] </Button>
                    <Button style={"header"} route={"register"}> [SIGN UP] </Button>
                </div>
                :
                <div className={styles.section}>
                    <Button style={"header"} route={"profile"}> [PROFILE] </Button>
                    <Button style={"header"} onClick={() =>
                    {
                        logout();
                        navigate("/");
                    }
                    }> [LOGOUT] </Button>
                </div>
            }
            <div className={styles.scrollBar} style={{width: `${widthScrollBar}%`}}></div>
        </div>
    )
}
export default Header;
