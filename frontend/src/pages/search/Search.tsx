import styles from "./_Search.module.scss";
import TextField from "../../components/TextField/TextField";
import CardArticle from "../../components/CardArticle/CardArticle.tsx";
import {useEffect, useState} from "react";
import {useQuery, gql} from "@apollo/client";
import {LatestPost} from "../../types/graphql";
import Button from "../../components/Button/Button.tsx";

const SEARCH_POST = gql`
query SEARCH_POST_QUERY($input: String!) {
  getSearchPost(input: $input) {
    post {
      id
      title
      imagePath
      user {
        username
        id
      }
    }
    likes
    dislikes
    comments
  }
}
`;

const SearchPage = () => {
    const [search, setSearch] = useState<string>("");
    const [allSearchPosts, setAllSearchPosts] = useState<LatestPost[]>([]);
    const [popularityOn, setPopularityOn] = useState<boolean>(false);

    const {data} = useQuery(SEARCH_POST, {
        variables: {
            input: search
        },
        skip: search.trim() === ""
    });

    useEffect(() => {
        if (data) {
            setAllSearchPosts(data.getSearchPost);
        }
    }, [data]);

    const handlePopularity = () => {
        const sortedPosts = [...allSearchPosts].sort((a, b) => {
            return b.likes - a.likes;
        });
        setAllSearchPosts(popularityOn ? sortedPosts.reverse() : sortedPosts);
        setPopularityOn(!popularityOn);
    };

    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <TextField
                    placeholder={"Rechercher un article"}
                    type={"text"}
                    style={"search"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className={styles.buttonContainer}>
                <Button onClick={handlePopularity} style={popularityOn ? "activated" : "primary"}>
                    Popularity
                </Button>
            </div>

            <h1 className={styles.title}>RÉSULTATS DE LA RECHERCHE :</h1>
            <div className={styles.cardContainer}>

                {allSearchPosts.length === 0 && (
                    <h1 className={styles.noResult}>Aucun résultat trouvé</h1>
                )}
                {allSearchPosts.map((post) => (
                    <CardArticle
                        key={post.post.id}
                        title={post.post.title}
                        image={`http://localhost:4000/${post.post.imagePath}`}
                        authorUsername={post.post.user.username}
                        id={post.post.id}
                        likes={post.likes}
                        dislikes={post.dislikes}
                    />
                ))}
            </div>
        </div>
    );
};

export default SearchPage;