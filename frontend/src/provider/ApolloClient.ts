import { ApolloClient, InMemoryCache} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const uploadLink = createUploadLink({
    uri: 'http://localhost:5009/graphql',
    headers: {'Apollo-Require-Preflight': 'true'}
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token_케이팝_Paris');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

export const client = new ApolloClient({
    link: authLink.concat(uploadLink),
    cache: new InMemoryCache(),
});