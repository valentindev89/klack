import * as S from './Loader.styled';

export default () => {
  return (
    <S.Container>
      <S.LogoBox>
        <S.Logo />
      </S.LogoBox>
      <S.Text>
        <S.Spinner
          width="20px"
          height="20px"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <S.Circle fill="none" strokeWidth={6} strokeLinecap="round" cx={33} cy={33} r={30} />
        </S.Spinner>
        Loading...
      </S.Text>
    </S.Container>
  );
};
