import styled from 'styled-components';
import analyticsIcon from 'public/icons/analytics.svg';

const AnalyticsIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  fill: #989ba0;
`;

export default () => (
  <AnalyticsIcon id="analytics-icon">
    <use xlinkHref={`${analyticsIcon}#icon-analytics`} />
  </AnalyticsIcon>
);
