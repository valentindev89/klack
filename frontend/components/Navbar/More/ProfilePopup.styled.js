import styled from 'styled-components';
import DefaultAvatar from 'components/UI/Avatar';

export const ContainerFull = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.background};
  position: absolute;
  top: 42px;
`;

export const Container = styled.div`
  width: 250px;
  background: ${props => props.theme.notificationsBG};
  color: ${props => props.theme.textColor};
  box-shadow: 0 10px 25px rgba(6, 8, 37, 0.14);
  opacity: 0;
  position: fixed;
  top: 50px;
  left: 50px;
  border-radius: 8px;
  font-size: 0.95rem;
  z-index: 5;
  transition: left 0.2s ease-in-out, opacity 0.2s ease-in-out;
  visibility: hidden;
  ${props =>
    props.opened &&
    `
    opacity: 1;
    visibility: visible;
  `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const Avatar = styled(DefaultAvatar).attrs({
  alt: 'Avatar',
})`
  width: 36px;
  height: 36px;
  border-radius: 3px;
  background-color: #dde0e2;
  background-size: cover;
  flex-shrink: 0;
  margin-right: 8px;
`;

export const Info = styled.div`
  height: min-content;
`;

export const Fullname = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
`;

export const Username = styled.p`
  margin: 0;
  font-size: 0.8rem;
  opacity: 0.6;
  margin-top: 2px;
`;
export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 18px 20px 20px 20px;
  cursor: pointer;
  user-select: none;
`;

export const Content = styled.div`
  overflow-y: auto;
  padding: 10px 0px;
  border-top: 1px solid ${props => props.theme.profilePopupBorder};
  border-bottom: 1px solid ${props => props.theme.profilePopupBorder};
`;

export const IconSVG = styled.div`
  width: 16px;
  height: 16px;

  margin-right: 12px;
  margin-top: -1px;
  mask-image: url(${({ src }) => src});
  background-color: ${props => props.theme.textColor};
`;

export const MenuItem = styled.div`
  display: flex;
  user-select: none;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  height: 18px;
  cursor: pointer;
  transition: all 0.05s linear;
  font-weight: 400;
  &:hover {
    background: ${props => props.theme.bgMoreItemsHover};
    .icon {
      opacity: 0.7;
    }
  }
`;

export const ToggleWrapper = styled.div`
  width: 20px;
  position: relative;
  height: 20px;
  right: 34px;
  bottom: 5px;
`;

export const UsersIcon = styled.svg`
  margin-right: 8px;
  width: 18px;
  height: 16px;

  fill: #989ba0;
`;

export const RolesIcon = styled.svg`
  margin-right: 8px;
  width: 18px;
  height: 16px;

  fill: #989ba0;
`;
