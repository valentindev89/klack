import styled from 'styled-components';

export const Members = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  hover: {
    opacity: 0.85;
  }
`;

export const UserIcon = styled.svg`
  position: relative;
  height: 12px;
  width: 12px;
  margin-right: 2px;
  top: 1px;
`;

export const MembersCount = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0 4px 0 4px;
  margin-bottom: -3px;
`;
