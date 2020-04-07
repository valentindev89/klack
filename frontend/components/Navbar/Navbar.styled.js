import styled from 'styled-components';
import PlusSVG from 'public/icons/new-plus-community.svg';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.navbarContainerBG};
  width: calc(100% - 24px);
  height: 34px;
  padding: 8px 12px 0;
  border-radius: 16px 16px 0 0;
`;

export const PlaceholderContainer = styled.div`
  height: 34px;
  width: calc(100% - 24px);
  border-radius: 16px 16px 0 0;
  padding: 8px 12px 0;
  background-color: ${props => props.theme.navbarContainerBG};
`;

export const IconsWrapper = styled.div`
  display: flex;
  height: 34px;
  align-items: center;
`;

export const Icons = styled.div`
  margin-right: 11px;
  padding-left: 1px;
`;

export const IconBox = styled.div`
  position: relative;
  margin: 0 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 19px;
  ${props =>
    props.last &&
    `
      display: inline-flex;
      margin: 0 2px;
      margin-right: -5px;
      vertical-align: bottom;
      margin-bottom: 2px;
  `}
  ${props =>
    props.second &&
    `
      vertical-align: top;
      margin: 0 8px 0 10px;
  `}
`;

export const AddCommunity = styled.div`
  cursor: pointer;
  display: block;
  width: 15px;
  height: 15px;
  background-image: url(${PlusSVG});
  background-repeat: no-repeat;
  background-position: center;
  outline: none;
  margin: 11px;
  margin-left: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.85;
  }
`;
