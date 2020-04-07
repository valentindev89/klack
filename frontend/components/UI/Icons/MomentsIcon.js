import styled from 'styled-components';
import momentsIcon from 'public/icons/moments.svg';

const MomentsIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  fill: #989ba0;
`;

export default () => (
  <MomentsIcon id="moments-icon">
    <use xlinkHref={`${momentsIcon}#icon-moments`} />
  </MomentsIcon>
);
