import gql from 'graphql-tag';

const GET_MOVIES = gql`
query {
  movies {
    _id
    Title
    Poster
    Genre
    imdbRating
  }
}
`;
export default GET_MOVIES;
