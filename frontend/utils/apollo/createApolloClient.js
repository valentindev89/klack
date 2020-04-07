import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { errorLink, requestLink, link, request } from './links';

export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: ApolloLink.from([
      errorLink,
      // requestLink.concat(uploadLink),
      requestLink,
      link,
    ]),
    request,
    cache: new InMemoryCache().restore(initialState),
  });
}
