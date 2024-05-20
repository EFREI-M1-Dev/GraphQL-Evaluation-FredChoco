import React, {useState} from 'react';
import styles from "./_CardArticle.module.scss";
import {Link, useNavigate} from "react-router-dom";
import Button from "../Button/Button";
import {gql, useMutation} from "@apollo/client";
import {LATEST_POST} from "../../pages/home/Home";
import {STATISTICS} from "../Metrics/Metrics";
import {useMainControllerContext} from "../../main";

const CardArticle = (
    props: {
        className?: string;
        id: string;
        title: string;
        image: string;
        authorUsername: string;
        onclick?: () => void;
        likes?: number;
        dislikes?: number;
        comments?: number;
        actionBar?: string;
    }) => {
    const {className, title, image, onclick} = props;
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const { m_notificationController } = useMainControllerContext();

    const backgroundImage = isHovered
        ? `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, .8), rgba(0, 0, 0, 0)), url(${image})`
        : `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, .6), rgba(0, 0, 0, 0)), url(${image})`;

    const capitalize = (s: string) => {
        const str = s.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const handleOnClick = () => {
        if (onclick) onclick();
        navigate(`/post/${props.id}`);
    }

    const DELETE_POST = gql`
    mutation DELETE_POST_Mutation($deletePostId: ID!) {
      deletePost(id: $deletePostId) {
        code
        message
        success
      }
    }
    `;
    const [deletePostAction] = useMutation(DELETE_POST, {
        refetchQueries: [{query: LATEST_POST}, {query: STATISTICS}]
    });


    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        deletePostAction({
            variables: {
                deletePostId: props.id
            }
        }).then(() => {
            m_notificationController.setNotification({ message: "Post deleted", type: "success" });
            navigate('/');
        }).catch((error) => {
            m_notificationController.setNotification({ message: error, type: "error" });
        });
    }

    return (
        <div
            className={`${styles.container} ${className || ''}`}
            onClick={handleOnClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundImage: backgroundImage,
            }}
        >
            <div className={styles.section}>
                <h2>{capitalize(title)}</h2>
                <div className={styles.author}>
                    <Link onClick={e => e.stopPropagation()}
                          to={`/profile/${props.authorUsername}`}>Par <i>{capitalize(props.authorUsername)}</i></Link>
                    <div className={styles.containerStat}>
                        <div className={styles.stat}>
                            <img className={styles.icon} src={'/pictograms/like.svg'} alt={"like"}/>
                            <img className={styles.icon} src={'/pictograms/dislike.svg'} alt={"dislike"}/>
                        </div>
                        <div className={styles.stat + " " + styles.number}>
                            <span>{props.likes || 0}</span>
                            <span>{props.dislikes || 0}</span>
                        </div>
                    </div>
                </div>
            </div>
            {props.actionBar && (
                <div className={styles.actions}>
                    <div className={styles.btns}>
                        <Button
                            style={"header"}
                            route={"/edit/post/" + props.actionBar}
                            onClick={(e) => e.stopPropagation()}
                        >
                            Edit
                        </Button>
                        <Button style={"header"}
                                onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default CardArticle;
