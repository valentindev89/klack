import * as S from './styled';

export const Button = ({ children, ...props }) => <S.Button {...props}>{children}</S.Button>;

export const ButtonSubtle = ({ children, ...props }) => (
  <S.ButtonSubtle {...props}>{children}</S.ButtonSubtle>
);

export const ButtonPrimary = ({ children, disabled, type, ...props }) => (
  <S.ButtonPrimary {...props} disabled={disabled} type={type}>
    {children}
  </S.ButtonPrimary>
);

export const ButtonOutline = ({ children, disabled, ...props }) => (
  <S.ButtonOutline {...props} disabled={disabled}>
    {children}
  </S.ButtonOutline>
);
