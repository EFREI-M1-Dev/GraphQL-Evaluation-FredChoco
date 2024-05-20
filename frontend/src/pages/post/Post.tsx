import styles from "./_Post.module.scss";
import Comment from "../../components/Comment/Comment.tsx";
import TextField from "../../components/TextField/TextField";
import CardArticle from "../../components/CardArticle/CardArticle.tsx";
import {gql, useMutation, useQuery} from "@apollo/client";
import {LatestPost, Comment as CommentType} from "../../types/graphql.ts";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Button from "../../components/Button/Button.tsx";
import {useAuth} from "../../provider/AuthContext.tsx";
import Like from "../../components/Like/Like.tsx";
import Dislike from "../../components/Dislike/Dislike.tsx";


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

const DELETE_COMMENT = gql`
mutation deleteComment($id: ID!) {
    deleteComment(id: $id) {
        code
        message
        success
    }
}
`;

const LIKE_POST = gql`
mutation createLike($userId: ID!, $postId: ID!) {
    createLike(userId: $userId, postId: $postId) {
        code
        message
        success
    }
}
`;

const DELETE_LIKE_POST = gql`
mutation deleteLike($id: ID!) {
    deleteLike(id: $id) {
        code
        message
        success
    }
}
`;

const GET_LIKE_POST = gql`
query getLike($userId: ID!, $postId: ID!) {
    getLike(userId: $userId, postId: $postId) {
        id
    }
}
`;

const DISLIKE_POST = gql`
mutation createDislike($userId: ID!, $postId: ID!) {
    createDislike(userId: $userId, postId: $postId) {
        code
        message
        success
    }
}
`;

const DELETE_DISLIKE_POST = gql`
mutation deleteDislike($id: ID!) {
    deleteDislike(id: $id) {
        code
        message
        success
    }
}
`;

const GET_DISLIKE_POST = gql`
query getDislike($userId: ID!, $postId: ID!) {
    getDislike(userId: $userId, postId: $postId) {
        id
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
    const [liked, setLiked] = useState<boolean>(false);
    const [disliked, setDisliked] = useState<boolean>(false);

    const {currentUser} = useAuth();

    const [likePost] = useMutation(LIKE_POST);
    const [deleteLike] = useMutation(DELETE_LIKE_POST);
    const [dislikePost] = useMutation(DISLIKE_POST);
    const [deleteDislike] = useMutation(DELETE_DISLIKE_POST);
    const [deleteComment] = useMutation(DELETE_COMMENT);
    const [createComment] = useMutation(CREATE_COMMENT);
    const [editComment] = useMutation(EDIT_COMMENT);


    const {data, loading} = useQuery(POST, {
        variables: {id},
    });

    const {data: commentsData, refetch} = useQuery(POST_COMMENTS, {
        variables: {postId: richPost ? richPost.post.id : ''},
    });

    const {data: userLikedPost} = useQuery(GET_LIKE_POST, {
        variables: {
            userId: currentUser?.id,
            postId: richPost?.post.id,
        }
    });

    const {data: userDislikedPost} = useQuery(GET_DISLIKE_POST, {
        variables: {
            userId: currentUser?.id,
            postId: richPost?.post.id,
        }
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

    useEffect(() => {
        if (userLikedPost) {
            setLiked(userLikedPost.getLike !== null);
        }
    }, [userLikedPost]);

    useEffect(() => {
        if (userDislikedPost) {
            setDisliked(userDislikedPost.getDislike !== null);
        }
    }, [userDislikedPost]);

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

    const handleDeleteComment = async (commentId: string) => {
        try {
            const {data} = await deleteComment({
                variables: {
                    id: commentId,
                },
            });

            if (data.deleteComment.success) {
                setComments(comments.filter((comment) => comment.id !== commentId));
                setRichPost((prev) => ({
                    ...prev,
                    comments: prev ? prev.comments - 1 : 0,
                }))
                refetch();
            } else {
                alert(data.deleteComment.message);
            }

        } catch (error) {
            console.error(error);
        }
    }

    const handleLikePost = async () => {
        try {
            if (liked) {
                const {data} = await deleteLike({
                    variables: {
                        id: userLikedPost?.getLike.id,
                    },
                });

                if (data.deleteLike.success) {
                    setLiked(false);
                } else {
                    alert(data.deleteLike.message);
                }
            } else {
                const {data} = await likePost({
                    variables: {
                        userId: currentUser?.id,
                        postId: richPost?.post.id,
                    },
                });

                if (data.createLike.success) {
                    setLiked(true);
                } else {
                    alert(data.createLike.message);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleDislikePost = async () => {
        try {
            if (disliked) {
                const {data} = await deleteDislike({
                    variables: {
                        id: userDislikedPost?.getDislike.id,
                    },
                });

                if (data.deleteDislike.success) {
                    setDisliked(false);
                } else {
                    alert(data.deleteDislike.message);
                }
            } else {
                const {data} = await dislikePost({
                    variables: {
                        userId: currentUser?.id,
                        postId: richPost?.post.id,
                    },
                });

                if (data.createDislike.success) {
                    setDisliked(true);
                } else {
                    alert(data.createDislike.message);
                }
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
                                {comment.user.id === currentUser?.id && (
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
                <div className={styles.container}>
                    {liked ? (
                        <div onClick={handleLikePost}><Like color={"#F221EB"} /></div>
                    ) : (
                        <div onClick={handleLikePost}><Like color={"white"} /></div>
                    )}
                    {disliked ? (
                        <div onClick={handleDislikePost}><Dislike color={"#F221EB"} /></div>
                    ) : (
                        <div onClick={handleDislikePost}><Dislike color={"white"} /></div>
                    )}
                </div>
                <p>Show comments</p>
            </div>
        </div>
    );
};

export default Post;