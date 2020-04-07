import styled from 'styled-components';
import moreIcon from 'public/icons/more.svg';

const MoreIcon = styled.svg.attrs({
  className: 'vs-more-icon',
})`
  cursor: pointer;
  height: 18px;
  width: 18px;
  margin-left: 8px;
  fill: ${props => (props.active ? '#69a9ff' : props.theme.iconColor)};
  :hover {
    opacity: 0.85;
  }
`;

export default ({ onClick, active, style }) => (
  <MoreIcon onClick={onClick} active={active} style={style || {}}>
    <use xlinkHref={`${moreIcon}#icon-more`} />
  </MoreIcon>
);
