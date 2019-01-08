import gql from 'graphql-tag';

const MOST_WATCHED_MOVIES = gql`
query {
  mostWatchedMovies {
    _id
    Title
    Poster
    Genre
    imdbRating
    Year
  }
}
`;
export default MOST_WATCHED_MOVIES;
