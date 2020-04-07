import styled from 'styled-components';

export const Community = styled.div`
  padding: 17px 23px 17px 23px;
  display: flex;
  cursor: pointer;
  align-items: center;
  position: relative;
  transition: 0.1s;
  user-select: none;
  :after {
    content: '';
    display: block;
    height: 1px;
    background: ${props => props.theme.communityBorder};
    position: absolute;
    left: 23px;
    right: 0;
    bottom: 0;
  }
  &:last-child:after {
    display: none;
  }
  :hover {
    background: ${props => props.theme.communityBorderHover};
    :after {
      background: ${props => props.theme.communityBorderHover};
    }
  }
`;

export const Avatar = styled.img`
  display: block;
  object-fit: cover;
  object-position: center;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  flex-shrink: 0;
  overflow: hidden;
  object-fit: contain;
`;

export const Info = styled.div`
  width: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-left: 15px;
`;

export const Name = styled.h3`
  max-width: calc(100% - 20px);
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  vertical-align: middle;

  margin-top: 3px;
  color: ${props => props.theme.chatAuthor};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.15px;
  line-height: 100%;
`;

export const Description = styled.p`
  color: #131313;
  font-size: 15px;
  font-weight: 400;
  line-height: 165%;
  color: ${props => props.theme.chatText};
`;
