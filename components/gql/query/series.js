import gql from 'graphql-tag';

const GET_SERIES = gql`
query {
  series {
    _id
    Title
    Poster
    Genre
    imdbRating
  }
}
`;
export default GET_SERIES;
