import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { authTokenStorega } from '../utils/AuthTokenStorage';


const gqlServerUri = 'http://localhost:4000/graphql'

const httpLink: ApolloLink = createHttpLink({ uri: gqlServerUri })

const authLink = setContext((_, {headers}) => {
	const token = authTokenStorega.AuthToken;
	return { headers:{
		...headers, authorization: token ? `${token}` : ''
	}}
});


export const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
	defaultOptions: {
		query: {fetchPolicy: 'no-cache'},
		mutate: {fetchPolicy: 'no-cache'},
	}
});