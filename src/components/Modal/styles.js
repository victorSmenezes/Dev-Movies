import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  background: #000;
  min-width: 20%;
  width: 65%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 50px;

  iframe {
    border: none;
    max-height: 500px;

    @media (max-width: 430px) {
      width: 100%;
      height: 300px;
    }
  }
  span {
    color: #eeeeee;
    position: absolute;
    bottom: 93%;
    left: 92%;
    font-size: 30px;
    font-weight: bold;

    &:hover,
    &:focus {
      color: red;
      text-decoration: none;
      cursor: pointer;
    }

    @media (max-width: 430px) {
      bottom: 88%;
    }
  }

  @media (max-width: 430px) {
    width: 85%;
    padding: 1px;
  }
`;
