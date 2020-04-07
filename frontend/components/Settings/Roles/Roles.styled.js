import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.chatBG};
  overflow-y: auto;
`;

export const Header = styled.div`
  position: absolute;
  background: ${props => props.theme.chatBG};
  z-index: 1;
  width: 100%;
  height: 73px;
  padding: 12px 23px;
  box-sizing: border-box;
  border-bottom: 1px solid ${props => props.theme.chatHeaderBorder};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Roles = styled.div`
  display: flex;
  align-items: center;
`;
export const Role = styled.p`
  color: #828282;
  font-weight: 500;
  font-size: 15px;
  margin-right: 13px;
  cursor: pointer;
  :hover {
    opacity: 0.85;
  }
  ${props =>
    props.active &&
    `
    color: ${props.theme.chatAuthor};
    font-size: 18px;
    font-weight: 700;
    `}
`;
export const Actions = styled.div``;

export const Body = styled.div`
  padding: 0 24px;
  width: calc(100% - 48px);
  min-height: calc(100% - 149px);
`;
export const SectionTitle = styled.h4`
  margin-top: 29px;
  color: ${props => props.theme.sectionTitle};
  font-size: 15px;
  font-weight: 700;
`;
export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  background: ${props => props.theme.chatBG};
  width: calc(100% - 48px);
  margin: 0 -24px;
  padding: 20px 24px;
  display: flex;
`;

export const PlusIconWrapper = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${props => (props.active ? '#69a9ff' : props.theme.iconColor)};
  cursor: pointer;
  margin-left: 12px;
  :hover {
    opacity: 0.85;
  }
`;
