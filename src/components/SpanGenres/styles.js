import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(120%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;
  animation: ${slideIn} 1s ease-in-out;

  span {
    padding: 8px 18px;
    border: 2px solid #ffffff;
    border-radius: 30px;
    font-size: 12px;
    font-weight: 600;
    background-color: #0f0f0f;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
