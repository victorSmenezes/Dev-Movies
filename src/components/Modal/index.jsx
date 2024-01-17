import { useEffect, useState } from 'react';

import { getMovieVideos, getSerieVideos } from '../../services/getData';
import { Background, Container } from './styles';

export default function Modal({ movieId, serieId, setShowModal }) {
  const [videoKey, setVideoKey] = useState();

  useEffect(() => {
    async function fetchVideo() {
      if (movieId) {
        const movieData = await getMovieVideos(movieId);
        setVideoKey(movieData);
      }
      if (serieId) {
        const serieData = await getSerieVideos(serieId);
        setVideoKey(serieData);
      }
    }

    fetchVideo();
  }, [movieId, serieId]);

  return (
    <Background onClick={() => setShowModal(false)}>
      {videoKey ? (
        <Container>
          <span>&times;</span>
          <iframe
            src={`https://www.youtube.com/embed/${videoKey[0]?.key}`}
            title="YouTube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      ) : (
        ''
      )}
    </Background>
  );
}
