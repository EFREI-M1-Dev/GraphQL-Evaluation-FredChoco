import styles from "./_CreatePost.module.scss";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import {useState} from "react";
import {useMutation, gql} from '@apollo/client';
import { useNavigate } from "react-router-dom";
import {useAuth} from "../../provider/AuthContext";

const CREATE_POST = gql`
mutation CreatePost($title: String!, $content: String!, $userId: ID!) {
  createPost(title: $title, content: $content, userId: $userId) {
    code
    message
    success
  }
}

`;

const CreatePostPage = () => {
    const [TitleValue, setTitleValue] = useState<string>('');
    const [ContentValue, setContentValue] = useState<string>('');
    const navigate = useNavigate();
    const {currentUser} = useAuth();

    const [createPost] = useMutation(CREATE_POST);

    const handleCreatePost = async () => {
        try {
            if(!currentUser) {
                alert("Vous devez être connecté pour créer un article");
                return;
            }
            const {data} = await createPost({
                variables: {title: TitleValue, content: ContentValue, userId: currentUser.id},
            });
            const {message, success} = data.createPost;
            if (success) {
                navigate('/');
            } else {
                alert(message);
            }
        } catch (error) {
            console.error("Error creating post:", error);
        }
    }

    return (

        <div className={styles.container}>
            <div className={styles.form}>
                <div>
                    <h1>Créer un article</h1>
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
                        // onChange={(e) => {
                        //     console.log(ContentValue);
                        //     setContentValue(e.target.value);
                        // }}
                        onChange={(e) => setContentValue(e.target.value)}

                        defaultNumberOfRows={10}
                    />
                </div>
                <Button style={"primary"} onClick={handleCreatePost}>Créer l'article</Button>
            </div>
        </div>
    );
};

export default CreatePostPage;