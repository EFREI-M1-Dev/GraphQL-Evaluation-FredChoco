import styles from "./_Post.module.scss";
import Comment from "../../components/Comment/Comment.tsx";
import TextField from "../../components/TextField/TextField";
import CardArticle from "../../components/CardArticle/CardArticle.tsx";
import {gql, useMutation, useQuery} from "@apollo/client";
import {LatestPost, Comment as CommentType} from "../../types/graphql.ts";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Button from "../../components/Button/Button.tsx";
import {useAuth} from "../../provider/AuthContext.tsx";

export const POST = gql`
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
      imagePath
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
  getAllCommentsByPost(postId: $postId) {
    content
    createdAt
    id
    user {
      username
      id
    }
  }
}
`;

const CREATE_COMMENT = gql`
mutation createComment($userId: ID!, $postId: ID!, $content: String!) {
    createComment(userId: $userId, postId: $postId, content: $content) {
        code
        message
        success
        comment {
            content
            createdAt
            user {
                username
            }
        }
    }
}
`;

const EDIT_COMMENT = gql`
mutation updateComment($id: ID!, $content: String!) {
    updateComment(id: $id, content: $content) {
        code
        message
        success
        comment {
            content
            createdAt
            user {
                username
            }
        }
    }
}
`;


const Post = () => {
    const {id} = useParams();
    const [richPost, setRichPost] = useState<LatestPost | null>(null);
    const [comments, setComments] = useState<CommentType[]>([]);
    const [commentContent, setCommentContent] = useState<string>('');
    const [editCommentId, setEditCommentId] = useState<string | null>(null);
    const [editCommentContent, setEditCommentContent] = useState<string>('');
    const {currentUser} = useAuth();

    const [createComment] = useMutation(CREATE_COMMENT);
    const [editComment] = useMutation(EDIT_COMMENT);


    const {data, loading} = useQuery(POST, {
        variables: {id},
    });

    const {data: commentsData, refetch} = useQuery(POST_COMMENTS, {
        variables: {postId: richPost ? richPost.post.id : ''},
    });


    useEffect(() => {
        if (data) {
            setRichPost(data?.getPost);
        }

    }, [data]);

    useEffect(() => {
        if (commentsData) {
            setComments(commentsData?.getAllCommentsByPost);
        }
    }, [commentsData]);

    const handleAddComment = async () => {
        if (!commentContent.trim()) return;
        try {
            const {data} = await createComment({
                variables: {
                    userId: currentUser?.id,
                    postId: richPost?.post.id,
                    content: commentContent,
                },
            });

            if (data.createComment.success) {
                setComments([...comments, data.createComment.comment]);
                setRichPost((prev) => ({
                    ...prev,
                    comments: prev ? prev.comments + 1 : 1,
                }))
                setCommentContent('');
                refetch();
            } else {
                alert(data.createComment.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleEditComment = async (commentId: string) => {
        if (!editCommentContent.trim()) return;
        try {
            const {data} = await editComment({
                variables: {
                    id: commentId,
                    content: editCommentContent,
                },
            });

            if (data.updateComment.success) {
                setEditCommentId(null);
                setEditCommentContent('');
                refetch();
            } else {
                alert(data.updateComment.message);
            }
        } catch (error) {
            console.error(error);
        }
    }

    if (!richPost || loading) return <></>

    return (
        <div className={styles.container}>
            <div className={styles.side__left}>
                <h2 className={styles.postTitle}>{richPost.post.title}</h2>

                <p>{richPost.post.content}</p>

                <p>{richPost.comments} commentaire{richPost.comments > 1 ? 's' : ''}</p>

                <TextField
                    placeholder={"Ajouter un commentaire..."}
                    type={"text"}
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                />

                <Button onClick={handleAddComment}>Ajouter un commentaire</Button>

                {comments.map((comment) => (
                    <div>
                        {editCommentId === comment.id ? (
                            <>
                                <TextField
                                    placeholder={"Modifier le commentaire..."}
                                    type={"text"}
                                    value={editCommentContent}
                                    onChange={(e) => setEditCommentContent(e.target.value)}
                                    style={"search"}
                                />
                                <Button onClick={() => handleEditComment(comment.id)}>Enregistrer</Button>
                                <Button onClick={() => setEditCommentId(null)}>Annuler</Button>
                            </>
                        ) : (
                            <>
                                <Comment
                                    username={comment.user.username}
                                    content={comment.content}
                                    createdAt={comment.createdAt}
                                />
                                {comment.user.id === currentUser.id && (
                                    <>
                                        <Button onClick={() => {
                                            setEditCommentId(comment.id);
                                            setEditCommentContent(comment.content);
                                        }}>Modifier</Button>
                                        <Button onClick={() => handleDeleteComment(comment.id)}>Supprimer</Button>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                ))}
            </div>

            <div className={styles.side__right}>
                <CardArticle
                    title={richPost.post.title}
                    image={`http://localhost:4000/${richPost.post.imagePath}`}
                    authorUsername={richPost.post.user.username}
                    likes={richPost.likes}
                    dislikes={richPost.dislikes}
                    id={richPost.post.id}
                />
                <div>
                    <img src={'/pictograms/like.svg'} alt={"like"}/>
                    <img src={'/pictograms/dislike.svg'} alt={"dislike"}/>
                </div>
                <p>Show comments</p>
            </div>
        </div>
    );
};

export default Post;