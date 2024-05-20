import styles from "./_CreatePost.module.scss";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import React, {useEffect, useState} from "react";
import {useMutation, gql, useLazyQuery} from '@apollo/client';
import {useNavigate, useParams} from "react-router-dom";
import {useAuth} from "../../provider/AuthContext";
import {POST} from "../post/Post";
import {useMainControllerContext} from "../../main";

const CREATE_POST = gql`
mutation CreatePost($title: String!, $content: String!, $userId: ID!, $file: Upload!) {
  createPost(title: $title, content: $content, userId: $userId, file: $file) {
    code
    message
    success
  }
}
`;


const EDIT_POST = gql`
mutation UpdatePost($updatePostId: ID!, $input: UpdatePostInput!) {
  updatePost(id: $updatePostId, input: $input) {
    code
    message
    success
  }
}
`;

const CreatePostPage = () => {
    const [TitleValue, setTitleValue] = useState<string>('');
    const [ContentValue, setContentValue] = useState<string>('');
    const [FileValue, setFileValue] = useState<File | null>(null);
    const [ImagePath, setImagePath] = useState<string>('');

    const navigate = useNavigate();
    const {currentUser, loggedIn} = useAuth();
    const {idPost} = useParams();

    const [createPost] = useMutation(CREATE_POST);
    const [editPost] = useMutation(EDIT_POST);

    const {m_notificationController} = useMainControllerContext();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFileValue(file);
        if (!file) return;
        setImagePath(URL.createObjectURL(file));
    };


    const handleCreatePost = async () => {
        try {
            if (!currentUser) {
                m_notificationController.setNotification({
                    message: "Vous devez être connecté pour créer un article",
                    type: "error"
                });
                return;
            }

            if (!TitleValue || !ContentValue) {
                m_notificationController.setNotification({message: "Veuillez remplir tous les champs", type: "error"});
                return;
            }

            if (!FileValue) {
                m_notificationController.setNotification({message: "Vous devez ajouter une image", type: "error"});
                return;
            }

            const {data} = await createPost({
                variables: {
                    title: TitleValue,
                    content: ContentValue,
                    userId: currentUser.id,
                    file: FileValue
                },
            });

            const {message, success} = data.createPost;
            if (success) {
                navigate('/');
                m_notificationController.setNotification({message: "Article créé", type: "success"});
            } else {
                m_notificationController.setNotification({message, type: "error"});
            }
        } catch (error) {
            m_notificationController.setNotification({message: "Une erreur est survenue", type: "error"});
        }
    };

    const handleEditPost = async () => {
        try {
            if (!currentUser) {
                m_notificationController.setNotification({
                    message: "Vous devez être connecté pour modifier un article",
                    type: "error"
                });
                return;
            }

            if (!TitleValue || !ContentValue || TitleValue === "" || ContentValue === "") {
                m_notificationController.setNotification({message: "Veuillez remplir tous les champs", type: "error"});
                return;
            }

            const {data} = await editPost({
                variables: {
                    updatePostId: idPost,
                    input: {
                        title: TitleValue,
                        content: ContentValue,
                        file: FileValue
                    }
                },
            });

            const {message, success} = data.updatePost;
            if (success) {
                navigate('/');
                m_notificationController.setNotification({message: "Article modifié", type: "success"});
            } else {
                m_notificationController.setNotification({message, type: "error"});
            }
        } catch (error) {
            m_notificationController.setNotification({message: "Une erreur est survenue", type: "error"});
        }
    }

    const handleSubmit = async () => {
        if (loggedIn && idPost) {
            handleEditPost().then().catch((e) => console.error(e));
        } else {
            handleCreatePost().then().catch((e) => console.error(e));
        }
    }

    const [fetchPost, {data}] = useLazyQuery(POST);

    useEffect(() => {
        if (idPost) {
            fetchPost({
                variables: {id: idPost}
            }).then().catch((e) => console.error(e));

            if (data) {
                setTitleValue(data.getPost.post.title);
                setContentValue(data.getPost.post.content);
                setImagePath("http://localhost:4000/" + data.getPost.post.imagePath);
            }
        }
    }, [idPost, data]);

    return (
        <div className={styles.container}
             onKeyDown={
                 (e) => {
                     if (e.key === "Enter") {
                         handleSubmit().then().catch((e) => console.error(e));
                     }
                 }
             }
        >
            <div className={styles.form}>
                <div>
                    <h1>{loggedIn && idPost ? 'Modifier un article' : 'Créer un article'}</h1>
                    <TextField
                        placeholder={'Titre de l\'article'}
                        type={"text"}
                        value={TitleValue}
                        onChange={(e) => setTitleValue(e.target.value)}
                    />
                    <TextField
                        placeholder={"Contenu de l'article"}
                        type={"area"}
                        value={ContentValue}
                        onChange={(e) => setContentValue(e.target.value)}
                        defaultNumberOfRows={10}
                    />

                    {ImagePath && (
                        <>
                            <h1>Image actuelle</h1>
                            <Button style={"header"}>
                                <img className={styles.postImage} src={ImagePath}
                                     alt={"image"}/>
                            </Button>
                        </>
                    )}
                    <input
                        type="file"
                        onChange={handleFileChange}
                    />
                </div>
                <Button style={"primary"}
                        onClick={handleSubmit}>{loggedIn && idPost ? 'Modifier l\'article' : 'Créer l\'article'}</Button>
            </div>
        </div>
    );
};

export default CreatePostPage;
