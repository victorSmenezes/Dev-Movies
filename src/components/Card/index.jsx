import { useNavigate } from 'react-router-dom';

import { getImages } from '../../utils/getImages';
import { Container } from './styles';

export default function Card({ item, movieId }) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/detalhe/${movieId}`)}>
      <img src={getImages(item.poster_path || item.profile_path || '')} />

      <h3>{item.original_title || item.name || ''}</h3>
    </Container>
  );
}
