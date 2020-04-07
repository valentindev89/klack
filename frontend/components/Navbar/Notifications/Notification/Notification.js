import moment from 'moment';
import { useRouter } from 'next/router';

import ReactHtmlParser from 'react-html-parser';

import { transformMentions } from 'utils/helper';
import * as S from './Notification.styled';

const Notification = ({ notification, onClick, closePopup }) => {
  const {
    query: { company },
    push,
  } = useRouter();

  const handleLink = async () => {
    await onClick({
      variables: {
        id: notification.id,
      },
    });

    push(
      `/[company]/[community]/[channel]`,
      `/${company}/${notification.channel.url}?linkMessageId=${notification.message.id}`,
      { shallow: true }
    );
    closePopup();
  };

  if (!notification.message) return <div />;

  return (
    <S.Container onClick={handleLink}>
      <S.AvatarWrapper>
        <S.Avatar
          src={notification.message.author.image}
          name={notification.message.author.username}
        />
      </S.AvatarWrapper>
      <S.Body>
        <S.Info>
          <S.Author>{notification.message.author.username}</S.Author>
          <S.Date>{moment(notification.createdAt).format('h:mm A')}</S.Date>
        </S.Info>
        <S.Message>{ReactHtmlParser(transformMentions(notification.message.body))}</S.Message>
        {notification.actions && (
          <S.Actions>
            {notification.actions.map(action => (
              <S.Button onClick={() => {}}>{action.name}</S.Button>
            ))}
            <S.Button cancel>Cancel</S.Button>
          </S.Actions>
        )}
      </S.Body>
    </S.Container>
  );
};

export default Notification;
