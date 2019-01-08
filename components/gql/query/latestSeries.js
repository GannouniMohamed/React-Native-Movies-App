import gql from 'graphql-tag';

const GET_LATEST_SERIES = gql`
query {
  latestSeries {
    _id
    Title
    Poster
    Genre
    imdbRating
    Year
  }
}
`;
export default GET_LATEST_SERIES;
