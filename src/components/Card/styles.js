import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-right: 12px;

  img {
    border-radius: 30px;
    width: 300px;
    height: 100%;

    @media (max-width: 430px) {
      width: 220px;
      border-radius: 15px;
    }
  }

  h3 {
    color: #ffffff;
    margin-top: 15px;

    @media (max-width: 430px) {
      font-size: 15px;
    }
  }
`;
