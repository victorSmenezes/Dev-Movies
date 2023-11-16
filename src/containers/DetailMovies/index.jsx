import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Credits from '../../components/Credits';
import Slider from '../../components/Slider';
import SpanGenres from '../../components/SpanGenres';
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos
} from '../../services/getData';
import { getImages } from '../../utils/getImages';
import { Background, Container, ContainerMovies, Cover, Info } from './styles';

export default function DetailMovies() {
  const [movie, setMovie] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id)
      ])
        .then(([movie, videos, credits, similar]) => {
          setMovie(movie);
          setMovieVideos(videos);
          setMovieCredits(credits);
          setMovieSimilar(similar);
        })
        .catch((err) => console.error(err));
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    getAllData();
  }, [id]);

  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} />
            </Cover>
            <Info>
              <h2>{movie.title}</h2>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <Credits credits={movieCredits} />
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos &&
              movieVideos.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="YouTube Video Player"
                    height="500px"
                    width="80%"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {movieSimilar && (
            <Slider
              info={movieSimilar}
              title={'Filmes Similares'}
              route={`/detalhe-filme/`}
            />
          )}
        </>
      )}
    </>
  );
}
