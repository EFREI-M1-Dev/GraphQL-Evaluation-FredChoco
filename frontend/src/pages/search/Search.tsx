import styles from "./_Search.module.scss";
import TextField from "../../components/TextField/TextField";
import CardArticle from "../../components/CardArticle/CardArticle.tsx";
import {useEffect, useState} from "react";
import {useQuery, gql} from "@apollo/client";
import {Post} from "../../types/graphql";

const SEARCH_POST = gql`
query SEARCH_POST_QUERY($input: String!) {
  getSearchPost(input: $input) {
    id
    title
    imagePath
    user {
      username
      id
    }
  }
}
`;

const SearchPage = () => {
    const [search, setSearch] = useState<string>("");
    const [allSearchPosts, setAllSearchPosts] = useState<Post[]>([]);

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

            <h1 className={styles.title}>RÉSULTATS DE LA RECHERCHE:</h1>
            <div className={styles.cardContainer}>

                {allSearchPosts.length === 0 && (
                    <h1 className={styles.noResult}>Aucun résultat trouvé</h1>
                )}
                {allSearchPosts.map((post) => (
                    <CardArticle
                        key={post.id}
                        title={post.title}
                        image={`http://localhost:4000/${post.imagePath}`}
                        authorUsername={post.user.username}
                        id={post.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default SearchPage;