import * as S from './Widget.styled';

export default ({ show, widgetUrl }) => (
  <S.WidgetIframe id="klack-iframe" active={show} src={widgetUrl} />
);
