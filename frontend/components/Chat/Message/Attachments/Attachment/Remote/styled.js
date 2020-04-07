import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 10px;
  max-width: 80%;
  border-left: 4px solid rgba(134, 135, 134, 0.84);
  margin: 20px 0;
`;

export const Header = styled.div``;
export const Body = styled.a`
  max-width: 400px;
  display: flex;
`;

export const Title = styled.span`
  margin-left: 20px;
  font-weight: bold;
`;
export const SiteName = styled.span`
  opacity: 0.7;
`;
export const Description = styled.p`
  margin: 5px;
  display: block;
  width: 100%;
`;
export const Preview = styled.img`
  width: 45px;
  height: auto;
  object-fit: cover;
`;
