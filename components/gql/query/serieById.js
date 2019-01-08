import gql from 'graphql-tag';

const GET_SERIEBYID = gql`
query GetSerieById( $id: ID! ) {
  serieById(id: $id) {
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
export default GET_SERIEBYID;
