import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const WrappedToastContainer = ({ className, ...rest }) => (
  <div className={className}>
    <ToastContainer {...rest} />
  </div>
);

export default styled(WrappedToastContainer).attrs({
  // custom props
})`
  .Toastify__toast-container {
  }
  .Toastify__toast {
    width: 230px;
    height: 55px;
    padding: 18px 14px;
    box-sizing: border-box;
    background: #2f3136;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);

    border-radius: 6px;
    border-left: 6px solid #69a9ff;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .Toastify__toast--error {
    border-color: #ff4b4b;
  }
  .Toastify__toast--warning {
    border-color: #69a9ff;
  }
  .Toastify__toast--success {
  }
  .Toastify__toast-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .Toastify__progress-bar {
    visibility: hidden;
    // background: white;
  }
`;
