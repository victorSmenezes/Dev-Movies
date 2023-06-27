import styled from 'styled-components';

export const Container = styled.div`
  z-index: 4;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 50px;

  img {
    width: 25%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`;

export const Li = styled.li`
  font-weight: 600;
  font-size: 28px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;
