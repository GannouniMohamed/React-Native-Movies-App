import gql from 'graphql-tag';

const GET_USER = gql`
query GetUser($email: String!, $password: String!) {
  user(email: $email, password: $password) {
    lastname
    name
    email
  }
}
`;
export default GET_USER;
