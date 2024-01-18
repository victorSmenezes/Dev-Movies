import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 60px;
  background: #5036ac;
  margin-top: 72px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  border-top: 4px dashed #189b20;

  p {
    font-size: 16px;
    color: #fff;
    text-decoration: none;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 3px;
`;

export const Linkedin = styled(FaLinkedinIn)`
  color: #fff;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;

  &:hover {
    color: #2f88ff;
  }
`;
export const GitHub = styled(FaGithub)`
  color: #fff;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;
