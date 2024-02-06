import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  from{
    transform:scale(0)
  }
  
  to{
    transform:scale(1)
    }
`;

const slideInBckTop = keyframes`
  0% {
    -webkit-transform: translateZ(700px) translateY(-300px);
    transform: translateZ(700px) translateY(-300px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 98vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 140px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;

  @media (max-width: 430px) {
    flex-direction: column-reverse;
    width: 98%;
    justify-content: end;
  }
`;

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: #ffffff;
    animation: ${slideInBckTop} 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @media (max-width: 430px) {
      font-size: 3rem;
      text-align: center;
    }
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 20px;

    @media (max-width: 430px) {
      width: 100%;
      font-size: 14px;
      text-align: justify;
    }
  }

  @media (max-width: 430px) {
    width: 98%;
    font-size: 10px;
    padding: 15px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 430px) {
    gap: 10px;
    justify-content: center;
  }
`;

export const Poster = styled.div`
  z-index: 2;

  img {
    width: 400px;
    border-radius: 30px;
    animation: ${scale} 0.5s linear;

    @media (max-width: 430px) {
      display: none;
    }
  }
`;
