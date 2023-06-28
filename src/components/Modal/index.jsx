import { useEffect, useState } from 'react';

import { getMovieVideos } from '../../services/getData';
import { Background, Container } from './styles';

export default function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovieVideos(movieId));
    }
    getMovies();
  }, []);

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <span>&times;</span>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
      ;
    </Background>
  );
}
