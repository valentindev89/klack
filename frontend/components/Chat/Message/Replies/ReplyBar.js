import React, { useCallback } from 'react';
import rightIcon from 'public/icons/right2.svg';
import * as S from './styled';

const ReplyBar = ({ reply, onClick }) => {
  const authorList = reply.map(({ author }) => author);
  const authorIdList = authorList.map(({ id }) => id);

  const getUniqueAuthorList = useCallback(
    () => [...new Set(authorIdList)].map(uniqueId => authorList.find(({ id }) => uniqueId === id)),
    [authorIdList]
  );

  return (
    <S.ReplyBlock onClick={onClick}>
      <S.ReplyAvatars>
        {getUniqueAuthorList().map(({ image, username, id }) => (
          <S.ReplyAvatarItem src={image} name={username} key={id} />
        ))}
      </S.ReplyAvatars>
      <S.ReplyNumber>{`${reply.length} messages`}</S.ReplyNumber>
      <S.ViewRepliesIcon>
        <use xlinkHref={`${rightIcon}#icon-right-2`} />
      </S.ViewRepliesIcon>
    </S.ReplyBlock>
  );
};

export default ReplyBar;
