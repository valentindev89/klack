import LaddaButton, { S, EXPAND_RIGHT } from 'react-ladda';
import styled from 'styled-components';

export const StyledLaddaButton = styled(LaddaButton).attrs({
  type: 'submit',
})`
  width: 100px;
  color: #fff;
  line-height: 38px;
  background-color: #69a9ff !important;
  font-family: Helvetica Neue;
  font-weight: 500;
  font-size: 15px;
  border-radius: 5px;
  padding: 0 20px;
  line-height: unset;
  .ladda-label {
    color: white;
    font-size: 15px !important;
    font-weight: 500;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  font-weight: 500;
  font-size: 15px;
  border-radius: 5px;
  padding: 0 20px;
  color: #fff;
  line-height: 38px;
  background-color: #69a9ff;
  :hover {
    opacity: 0.85;
  }
  :active {
    opacity: 0.75;
  }
  border-radius: 5px !important;
  padding: 0 !important;
`;

// eslint-disable-next-line import/prefer-default-export
export const ButtonSpinning = ({ loading, onClick, children }) => (
  <StyledLaddaButton
    loading={loading}
    onClick={onClick}
    data-color="#69a9ff"
    data-size={S}
    data-style={EXPAND_RIGHT}
    data-spinner-size={20}
    data-spinner-color="#fff"
    data-spinner-lines={10}
    style={{
      fontSize: 15,
      fontWeight: 500,
    }}
  >
    {children}
  </StyledLaddaButton>
);
