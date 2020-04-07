import styled from 'styled-components';
import logo from 'public/logo.svg';
import bicycle from 'public/images/landing/bicycles.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  align-self: flex-start;
  margin: 35px 0 0 97px;
`;

export const Heading = styled.h1.attrs({
  className: 'f1 fw7 mb4',
})`
  font-family: Avenirnext;
  margin: 100px 0 0;
  text-transform: capitalize;
`;

export const SubHeading = styled.h3.attrs({
  className: 'f3 fw4 o-60',
})`
  font-family: Avenirnext;
  margin: 0;
`;

export const Picture = styled.img.attrs({
  src: bicycle,
  className: 'w-60',
})`
  margin-top: -80px;
  flex: 0 0 auto;
`;
