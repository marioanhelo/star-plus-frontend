import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { GET_MOVIE, GET_MOVIES } from '../graphql/Query'
import { useLazyQuery, useMutation } from '@apollo/client'
import Navbar from './NavbarStar'
import Loader from './Loader';
import Swal from 'sweetalert2'
import LikeButton from './LikeButton';
import { REMOVE_MOVIE } from '../graphql/Mutation';


const MovieDetail = () => {
    useEffect(()=>{
        getMovie()
      },[])
    const location = useLocation();
	const getMovieId = location.state.id && location.state.id !== undefined? location.state.id : "";
    const [getMovie, {error, data, loading }] = useLazyQuery(GET_MOVIE, {
		variables: { id:getMovieId },
	});
    const [removeMovie] = useMutation(REMOVE_MOVIE,{
        //refetch the query notes
        refetchQueries:[{query:GET_MOVIES}]
    })
    if(loading) return <Loader/>

    if (data && data.getMovie.title) {
	}
    if(error){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Something went wrong"
          })
    }

  return (
    <>
    <Navbar/>
    {
        data &&
        <div className="mt-10 pt-6 pb-12">
            <div id="card" className="">
                <h2 className="text-center font-serif  uppercase text-4xl xl:text-5xl"></h2>
                <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
                    <div className="flex flex-col md:flex-row overflow-hidden bg-slate-800 bg-opacity-30 rounded-lg shadow-xl  mt-4 w-100 mx-2">
                        <div className="h-64 w-auto md:w-1/2">
                            <img className="inset-0 h-full w-full object-cover object-center" src={data.getMovie.image} />
                        </div>
                        <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                            <h3 className="text-6xl text-white dark:text-white leading-tight truncate">{data.getMovie.title}</h3>
                            <p className="mt-2 text-white">
                                {data.getMovie.description}
                            </p>
                            <div class="grid gap-4 grid-cols-3">
                                <p className="text-sm text-white uppercase tracking-wide font-semibold mt-2">
                                Released Date: {data.getMovie.dateofreleased}
                                </p>
                            </div>
                            <div className="grid gap-4 grid-cols-4" data-id={data.getMovie.id}>
                                <LikeButton/>
                                <button type='button' className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Agregar a mi lista</button>
                                <Link to="/create-movie"
                        state={{id:data.getMovie.id,title:data.getMovie.title, description:data.getMovie.description, dateofreleased:data.getMovie.dateofreleased, image:data.getMovie.image}}
                        className="text-center focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" role='button'>Actualizar
                    </Link>
                                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" 
                                    onClick={async (e)=>{
                                    let getDocumentId = e.target.parentElement.getAttribute("data-id");
                                    return await removeMovie({variables:{id:getDocumentId}})
                                }}>Eliminar</button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    </>
  )
}

export default MovieDetail