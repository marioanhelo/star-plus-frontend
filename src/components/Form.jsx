import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {gql, useMutation} from "@apollo/client";
import { CREATE_MOVIE } from "../graphql/Mutation";
import { UPDATE_MOVIE } from "../graphql/Mutation";
import { useNavigate, useLocation } from "react-router-dom";
import { GET_MOVIES } from "../graphql/Query";
import Navbar from "./NavbarStar";

const Form = () => {
    useEffect(() => {
      if(getStateObj){
        setTitle(titleMovie);
        setDescription(descriptionMovie);
        setDate(dateMovie);
        setImage(imageMovie);
        setId(movieId)
      }
    }, [])

  //Global variables declaration block
    const navigate = useNavigate()
    const location = useLocation()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date,setDate] = useState('')
    const [image, setImage] = useState('')
    const [id,setId] = useState('')


    const [createMovie] = useMutation(CREATE_MOVIE,{})
    const [updateMovie] = useMutation(UPDATE_MOVIE,{})
  //Location store variables
    const getStateObj = location.state;
    const movieId = location.state && location.state.id !== undefined ? location.state.id : "";
    const titleMovie = location.state && location.state.title !== undefined ? location.state.title : "";
    const descriptionMovie = location.state && location.state.description !== undefined ? location.state.description : "";
    const dateMovie = location.state && location.state.dateofreleased !== undefined ? location.state.dateofreleased : "";
    const imageMovie = location.state && location.state.image !== undefined ? location.state.image : "";
  return (
    <>
      <Navbar/>
      <div className="form-container">
      <div className="content-center w-6/12 p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <form
            onSubmit={ async ( e ) => {
                e.preventDefault();

                if (getStateObj){
                    await updateMovie({
                        variables:{title,description,image,date,id}
                    })
                }else{
                    await createMovie({
                    variables: {title,description,image,date}
                    })
                }
                navigate('/home')
            }}
        >
          <div className="grid md:grid-cols-1 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="input_title"
                id="input_title"
                value={title}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) =>{
                    setTitle(e.target.value)
                }}
              />
              <label
                htmlFor="input_title"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Title
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="content"
                rows="4"
                value={description}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Resumen de la película"
                onChange={(e) =>{
                    setDescription(e.target.value)
                }}
              ></textarea>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2">
                <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="input_image"
                id="input_image"
                value={image}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) =>{
                    setImage(e.target.value)
                }}
              />
              <label
                htmlFor="input_image"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Póster
              </label>
            </div>
                </div>
                <div className="basis-1/2">
                <div className="relative z-0 mb-6 w-full group">
              <input
                type="date"
                name="input_date"
                id="input_date"
                value={date}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) =>{
                    setDate(e.target.value)
                }}
              />
              <label
                htmlFor="input_date"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date of Released
              </label>
            </div>
                </div>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {getStateObj ? "Update": "Save"}
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Form;
