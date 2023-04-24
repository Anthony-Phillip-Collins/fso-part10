import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from "expo-constants";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";

const { apolloUri } = Constants.manifest.extra;

const httpLink = createHttpLink({
  uri: apolloUri,
});

const getAuthLink = (authStorage) => {
  return setContext(async (_, { headers }) => {
    try {
      const token = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });
};

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
    Repository: {
      fields: {
        reviews: {
          keyArgs: false,
          merge(existing, incoming) {
            const edges = [
              ...(existing?.edges ?? []),
              ...(incoming.edges ?? []),
            ];

            const unique = edges.reduce((a, b) => {
              const duplicate = a.find(({ node }) => {
                return node.__ref === b.node.__ref;
              });

              if (!duplicate) {
                return a.concat(b);
              }
              return a;
            }, []);

            return {
              ...incoming,
              edges: unique,
            };
          },
        },
      },
    },
  },
});

const createApolloClient = (authStorage) => {
  const authLink = getAuthLink(authStorage);
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });
};

export default createApolloClient;
