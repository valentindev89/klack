import { useQuery } from '@apollo/react-hooks';
import { SEARCH_COMMUNITIES } from 'apis/Community';

import Community from './Community';

import * as S from './CommunitiesList.styled';

const CommunitiesList = ({ searchString }) => {
  const { data: { searchCommunities: communities = [] } = {} } = useQuery(SEARCH_COMMUNITIES, {
    variables: { searchString },
  });

  return (
    <S.CommunitiesList>
      {communities.map(community => (
        <Community community={community} key={community.id} />
      ))}
    </S.CommunitiesList>
  );
};

export default CommunitiesList;
