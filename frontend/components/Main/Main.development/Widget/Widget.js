import * as S from './Widget.styled';

export default ({ show, widgetUrl }) => (
  <S.WidgetIframe id="vs-iframe" active={show} src={widgetUrl} />
);
