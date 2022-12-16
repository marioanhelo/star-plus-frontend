import { gql } from "@apollo/client";

export const CREATE_MOVIE =  gql`
mutation createMovie($title:String!, $description:String! $image:String, $dateofreleased:String){
  createMovie(input : {title:$title,description:$description,image:$image, dateofreleased:$dateofreleased})
  {
    title
    description
    image
    dateofreleased
    likes
  }
}`

  export const REMOVE_MOVIE = gql`
  mutation removeMovie($id:ID!){
    removeMovie(id:$id){
      id
      title
      description
      image
      dateofreleased
      likes
    }
  }

  `

  export const UPDATE_MOVIE = gql`
  mutation updateMovie ($title:String!, $description:String! $image:String, $dateofreleased:String, $id:ID){
    updateMovie(input : {title:$title,description:$description,image:$image, dateofreleased:$dateofreleased},id:$id){
      id
      title
      description
      image
      dateofreleased
      likes
    }
  }
  `

  export const UPDATE_LIKE_MOVIE = gql `
  mutation updateLikeMovie ($likes:Int, $id:ID){
    updateLikeMovie(input : {likes:$likes},id:$id){
      id
      title
      description
      image
      dateofreleased
      likes
    }
  }
  `