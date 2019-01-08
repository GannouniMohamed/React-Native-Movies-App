import gql from 'graphql-tag';

const GET_LATEST_MOVIES = gql`
query {
  latestMovies {
    _id
    Title
    Poster
    Genre
    imdbRating
    Year
  }
}
`;
export default GET_LATEST_MOVIES;
