import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Arrow, ArrowLeft } from './styles';

const BackButton = () => {
  const navigate = useNavigate();
  const BackTop = () => window.scrollTo({ top: 0, behavior: 'auto' });

  const BackPage = () => {
    navigate(-1);
    BackTop();
  };

  return (
    <Arrow onClick={BackPage}>
      <ArrowLeft />
    </Arrow>
  );
};

export default BackButton;
