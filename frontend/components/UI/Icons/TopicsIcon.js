import styled from 'styled-components';
import topicIcon from 'public/icons/topic.svg';

const TopicsIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  fill: #989ba0;
`;

export default () => (
  <TopicsIcon id="topic-icon">
    <use xlinkHref={`${topicIcon}#icon-topic`} />
  </TopicsIcon>
);
