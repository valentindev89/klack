import * as S from './styled';

const Input = ({
  field,
  form: { touched, errors } = {},
  type,
  label,
  placeholder,
  tip,
  urlMask,
  value,
  labelStyle,
  autoFocus,
  style,
}) => (
  <S.InputContainer style={style || {}}>
    <S.Label style={labelStyle || {}}>{label}</S.Label>
    {field ? (
      <S.Input
        type={type}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
    ) : (
      <S.Input type={type} placeholder={placeholder} value={value} disabled />
    )}
    {touched && touched[field.name] && errors[field.name] && (
      <S.Error>{errors[field.name]}</S.Error>
    )}
    {tip && <S.Tip>{tip}</S.Tip>}
    {urlMask && <S.UrlMask>{urlMask}</S.UrlMask>}
  </S.InputContainer>
);

export default Input;
