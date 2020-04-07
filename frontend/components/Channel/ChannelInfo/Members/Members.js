import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/react-hooks';
import { useEscapeToClose } from 'hooks';
import { COMPANY_NAME } from 'utils/config';
import { GET_COMMUNITY } from 'apis/Community';
import { USER_WENT_ONLINE, USER_WENT_OFFLINE } from 'apis/User';
import { UserIcon, CloseIcon } from 'components/UI/Icons';
import PortalWrapper from 'components/UI/PortalWrapper';

import Member from './Member';
import MembersPlaceholder from './Members.placeholder';
import * as S from './Members.styled';

const Members = ({ show, onClose }) => {
  const {
    query: { community: communityUrl, channel: channelUrl },
  } = useRouter();
  const [getMembers, { data, loading, error, subscribeToMore }] = useLazyQuery(GET_COMMUNITY);

  useEscapeToClose(onClose);

  useEffect(() => {
    if (channelUrl) {
      getMembers({ variables: { url: communityUrl } });
    }
  }, [channelUrl]);

  useEffect(() => {
    if (subscribeToMore) {
      subscribeToMore({
        document: USER_WENT_ONLINE,
        variables: {
          channelUrl: `${communityUrl}/${channelUrl}`,
          tenant: COMPANY_NAME(),
        },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          const { user } = subscriptionData.data;
          const userData = prev.members.filter(member => member.username === user.username)[0];
          userData.isOnline = user.isOnline;
          return {
            ...prev,
          };
        },
      });
      subscribeToMore({
        document: USER_WENT_OFFLINE,
        variables: {
          channelUrl: `${communityUrl}/${channelUrl}`,
          tenant: COMPANY_NAME(),
        },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          const { user } = subscriptionData.data;

          const userData = prev.members.filter(member => member.username === user.username)[0];
          userData.isOnline = user.isOnline;
          return {
            ...prev,
          };
        },
      });
    }
  }, [subscribeToMore]);

  if (error) {
    return <div />;
  }
  if (loading || !data) {
    return <MembersPlaceholder />;
  }

  return (
    <PortalWrapper show={show} portalKey="members">
      <S.Wrapper>
        <S.Container>
          <S.Header>
            <div>
              <S.Title>About this channel</S.Title>
              <S.Subtitle>
                <S.UserIcon>
                  <UserIcon />
                </S.UserIcon>
                {data.community && ` ${data.community.members.length} members`}
              </S.Subtitle>
            </div>
            <CloseIcon onClick={onClose} style={{ position: 'inherit' }} />
          </S.Header>

          <S.List>
            {data.community &&
              data.community.members.map(member => <Member member={member} key={member.id} />)}
          </S.List>
        </S.Container>
      </S.Wrapper>
    </PortalWrapper>
  );
};

export default Members;
