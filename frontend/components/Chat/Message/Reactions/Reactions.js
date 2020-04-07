import Reaction from './Reaction';
import * as S from './Reactions.styled';

const Reactions = ({ reactions, messageId }) => (
  <S.Reactions>
    {reactions.map(reaction => (
      <Reaction reaction={reaction} messageId={messageId} key={reaction.id} />
    ))}
  </S.Reactions>
);

export default Reactions;
