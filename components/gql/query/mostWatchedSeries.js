import gql from 'graphql-tag';

const MOST_WATCHED_SERIES = gql`
query {
  mostWatchedSeries {
    _id
    Title
    Poster
    Genre
    imdbRating
    Year
  }
}
`;
export default MOST_WATCHED_SERIES;
