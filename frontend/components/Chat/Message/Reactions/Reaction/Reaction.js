// Refactor: createUsersList
import { useContext } from 'react';
import { UserContext } from 'context';
import { useMutation } from '@apollo/react-hooks';
import { Emoji } from 'emoji-mart';

import { TOGGLE_REACTION } from 'apis/Message';

import Tooltip from 'components/UI/Tooltip';
import * as S from './Reaction.styled';

const maxNumberOfLines = 50;
const lineSymbols = 28;

export default ({ reaction, messageId }) => {
  const [toggleReaction] = useMutation(TOGGLE_REACTION);
  const { isLogged } = useContext(UserContext);

  const onToggleReaction = () => {
    if (isLogged) {
      toggleReaction({
        variables: {
          name: reaction.name,
          messageId,
        },
      });
    }
  };

  const createUsersList = users => {
    const userListString = users.map(({ username: userName }) => userName).join(', ');
    const resultList = [];
    for (let i = 0; i < maxNumberOfLines; i++) {
      resultList.push(userListString.slice(i * lineSymbols, (1 + i) * lineSymbols));
    }

    return resultList;
  };

  return (
    <S.Reaction key={reaction.id} onClick={onToggleReaction} isLogged={isLogged}>
      <Emoji
        emoji={reaction.name}
        size={16}
        style={{
          width: 16,
          height: 16,
        }}
        set="apple"
      />
      <S.Count>{reaction.users.length}</S.Count>
      <S.TooltipWrapper>
        <Tooltip>
          <S.UsersList maxNumberOfLines={maxNumberOfLines}>
            {createUsersList(reaction.users).map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </S.UsersList>
          <S.ReactonName>{`reacted with ${reaction.name}`}</S.ReactonName>
        </Tooltip>
      </S.TooltipWrapper>
    </S.Reaction>
  );
};
