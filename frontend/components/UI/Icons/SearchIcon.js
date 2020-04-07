import styled from 'styled-components';
import searchIcon from 'public/icons/search.svg';

const SearchIcon = styled.svg`
  cursor: pointer;
  position: relative;
  top: -1px;
  height: 19px;
  width: 19px;
  fill: ${props => (props.active ? '#69a9ff' : props.theme.iconColor)};
  :hover {
    opacity: 0.85;
  }
`;

export default ({ onClick, active }) => (
  <SearchIcon onClick={onClick} active={active}>
    <use xlinkHref={`${searchIcon}#icon-search`} />
  </SearchIcon>
);
