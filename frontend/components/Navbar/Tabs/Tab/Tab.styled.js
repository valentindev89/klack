import styled from 'styled-components';

export const UnsubscribeIcon = styled.svg`
  transition: 0.3s;
  fill: #7d7d7d;
  width: 8px;
  height: 8px;
  opacity: 0;
`;

export const UnsubscribeIconWrapper = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 8px;
  :hover {
    background: #d7d7d7;
    opacity: 0.85;
  }
`;

export const CommunityName = styled.span`
  color: #7d7d7d;
  font-size: 14px;
  font-weight: 500;
  line-height: 13px;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 17px;
  margin-top: 2px;
`;

export const Tab = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 135px;
  height: 100%;
  background: ${props => props.theme.tabBG};
  position: relative;
  user-select: none;
  :before,
  :after {
    content: '';
    display: ${props => (props.active ? 'block' : 'none')};
    width: 9px;
    height: 9px;
    background-image: radial-gradient(circle at 0 0, transparent 9px, #f4f7f 9px);
    background-repeat: no-repeat;
    position: absolute;
    z-index: 1;

    ${props =>
      props.theme.tabBG === '#f4f7fa'
        ? 'background-image: radial-gradient(circle at 0 0, transparent 9px, #fff 9px);'
        : 'background-image: radial-gradient(circle at 0 0, transparent 9px, #2f3136 9px);'}
  }
  :after {
    bottom: 0;
    left: auto;
    right: -9px;
    transform: rotate(90deg);
  }
  :before {
    bottom: 0;
    left: -9px;
  }
  ${props =>
    !props.active &&
    `
    :hover {
      background: ${props.theme.tabBGHover};
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      :before, :after {
        background-image: radial-gradient(circle at 0 0, transparent 9px, #eff2f5 9px);
      }
    }
  `}

  ${props =>
    props.active &&
    `
    background: ${props.theme.background};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    opacity: 1;
    z-index: 1;
    :before, :after {
      z-index: 1;
    }
    ${UnsubscribeIcon} {
      fill: ${props.theme.activeTabText};
      opacity: 1;
    }
    ${CommunityName} {
      color: ${props.theme.activeTabText};
    }
  `}
  :hover {
    ${UnsubscribeIcon} {
      opacity: 1;
    }
  }
`;

export const TabContent = styled.div`
  padding: 0 11px;
  background: transparent;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${props =>
    !props.active &&
    !props.nextActive &&
    `
    :after {
      position: absolute;
      content: "";
      display: inline-block;
      height: 25px;
      width: 1px;
      background: ${props.theme.tabDividerColor};
      bottom: 4px;
      right: 1px;
    }
  `}
  ${Tab}:hover & {
    :after {
      display: none;
    }
  }
`;

export const Community = styled.div`
  display: flex;
  align-items: center;
`;

export const CommunityLogo = styled.img.attrs({
  alt: 'Logo',
})`
  border-radius: 4px;
  width: 15px;
  height: 15px;
  margin-right: 7px;
  object-fit: contain;
`;
