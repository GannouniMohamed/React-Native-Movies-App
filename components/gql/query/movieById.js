import gql from 'graphql-tag';

const GET_MOVIEBYID = gql`
query GetMovieById( $id: ID! ) {
  movieById(id: $id) {
    _id
    Title
    Poster
    Plot
    Year
    imdbRating
    Genre
  }
}
`;
export default GET_MOVIEBYID;
