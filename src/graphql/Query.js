import { gql } from "@apollo/client";

export const GET_MOVIES =  gql`
{
    getMovies {
        id
        title
        description
        image
        likes
        dateofreleased
      }
}`
export const LOGIN = gql`
    query  login($email: String, $password: String) {
            login(email: $email, password: $password){
                email
                password
            }
     }
`
export const GET_MOVIE = gql`
    query getMovie($id:ID){
        getMovie(id:$id){
            id
            title
            description
            image
            likes
            dateofreleased
    }
  }
`
export const MOVIE_SEARCH_QUERY = gql`
    query Search($filter: String){
        search(filter:$filter){
          id
          title
          description
          image
          likes
        }
}`

export const SEARCH_MOVIES = gql`
query Search($filter:String){
    search(filter:$filter){
        id
        title
        description
        image

    }
  }
`;