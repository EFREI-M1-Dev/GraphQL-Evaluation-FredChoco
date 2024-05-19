import styles from "./_Post.module.scss";
import Comment from "../../components/Comment/Comment.tsx";
import TextField from "../../components/TextField/TextField";
import CardArticle from "../../components/CardArticle/CardArticle.tsx";
import {gql, useQuery} from "@apollo/client";
import { LatestPost, Comment as CommentType } from "../../types/graphql.ts";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const POST = gql`
query POST_QUERY($id: ID!) {
  getPost(id: $id) {
    comments
    dislikes
    likes
    post {
      content
      createdAt
      id
      title
      user {
        email
        id
        username
      }
    }
  }
}
`;

const POST_COMMENTS = gql`
query POST_COMMENTS_QUERY($postId: ID!) {
  getAllCommentsByPost(id: $postId) {
    content
    createdAt
    user {
      username
    }
  }
}
`;

const Post = () => {
    const { id } = useParams();
    const [richPost, setRichPost] = useState<LatestPost | null>(null);
    const [comments, setComments] = useState<CommentType[]>([]);

    const { data, loading } = useQuery(POST, {
        variables: { id },
    });

    const { data: commentsData } = useQuery(POST_COMMENTS, {
        variables: { postId: richPost ? richPost.post.id : '' },
    });

    useEffect(() => {
        if (data) {
            setRichPost(data?.getPost);
            if (commentsData) {
                setComments(commentsData?.getAllCommentsByPost);
            }
        }

    }, [data, commentsData]);


    if(!richPost || loading) return <></>

    console.log(comments);
    return (
        <div className={styles.container}>
            <div className={styles.side__left}>
                <h2 className={styles.postTitle}>{richPost.post.title}</h2>

                <p>{richPost.post.content}</p>

                <p>{richPost.comments} commentaire{richPost.comments > 1 ? 's' : ''}</p>
                <TextField placeholder={"Ajouter un commentaire..."} type={"text"} style={"search"}/>
                {comments.map((comment) => (
                    <Comment
                        username={comment.user.username}
                        content={comment.content}
                        createdAt={comment.createdAt}
                    />
                ))}
            </div>

            <div className={styles.side__right}>
                <CardArticle
                    title={richPost.post.title}
                    image={"https://www.buzzfrance.fr/wp-content/uploads/2022/10/quelle-star-de-kpop-es-tu.jpeg"}
                    authorUsername={richPost.post.user.username}
                    likes={richPost.likes}
                    dislikes={richPost.dislikes}
                    id={richPost.post.id}
                />
                <div>
                    <img src={'/pictograms/like.svg'}/>
                    <img src={'/pictograms/dislike.svg'}/>
                </div>
                <p>Show comments</p>
            </div>
        </div>
    );
};

export default Post;