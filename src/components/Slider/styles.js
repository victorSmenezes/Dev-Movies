import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  padding: 0 20px;
  overflow-x: hidden;

  h2 {
    color: #ffffff;
    font-size: 24px;
    margin: 50px 0 20px 20px;

    @media (max-width: 430px) {
      font-size: 20px;
    }
  }

  .swiper-wrapper {
    display: flex;
  }
`;
