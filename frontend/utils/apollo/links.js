import { ApolloLink, split, Observable } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';
import { createUploadLink } from 'apollo-upload-client';
import { getMainDefinition } from 'apollo-utilities';
import { COMPANY_NAME } from 'utils/config';

const uri = `${process.env.BACKEND_URL}/graphql`;
const wsUri = `${process.env.WS_URL}/`;

export const httpLink = new HttpLink({
  uri,
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  fetch,
});

export const wsLink = process.browser
  ? new WebSocketLink({
      uri: wsUri,
      options: {
        reconnect: true,
        connectionParams: {
          token: Cookies.get('token'),
          'klack-tenant': COMPANY_NAME(),
        },
      },
    })
  : () => console.log('SSR');

export const request = async operation => {
  const token = await Cookies.get('token');
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
      'klack-tenant': COMPANY_NAME(),
    },
  });
};

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const isSubscriptionOperation = ({ query }) => {
  const { kind, operation } = getMainDefinition(query);
  return kind === 'OperationDefinition' && operation === 'subscription';
};

export const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle;
      Promise.resolve(operation)
        .then(oper => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

const uploadLink = createUploadLink({ uri });

export const link = process.browser
  ? split(isSubscriptionOperation, wsLink, uploadLink)
  : uploadLink;
