import { useContext } from 'react';
import { AppContext } from 'context';

import gql from 'graphql-tag';

import Navbar from 'components/Navbar/Navbar';
import Loader from 'components/UI/Loader';

import * as S from './styled';

export const GET_COMMUNITIES = gql`
  query communities {
    communities {
      id
      url
      image
      name
      author {
        id
      }
      members {
        id
      }
      notifications {
        id
      }
    }
  }
`;

const Layout = ({ children, hideLayout }) => {
  const { communitiesLoaded } = useContext(AppContext);

  if (hideLayout) {
    return children;
  }

  return (
    <S.Layout data-hj-suppress>
      {!communitiesLoaded && <Loader />}
      <Navbar />
      <S.Content>
        {children}
        <div id="portal-root" style={{ width: '538px', minWidth: '538px', display: 'none' }} />
      </S.Content>
      <div id="alert-root" style={{ width: '538px', minWidth: '538px', display: 'none' }} />
      <div id="ReactModalPortal" style={{ width: '100%', minWidth: '100%' }} />
    </S.Layout>
  );
};

export default Layout;
