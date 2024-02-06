import { FaArrowLeft } from 'react-icons/fa';

import styled from 'styled-components';

export const Arrow = styled.div`
  position: fixed;
  top: 120px;
  left: 20px;
  cursor: pointer;
  z-index: 999;
`;

export const ArrowLeft = styled(FaArrowLeft)`
  width: 24px;
  height: 24px;
  color: #fff;
  border: 2px dashed #5036ac;
`;
