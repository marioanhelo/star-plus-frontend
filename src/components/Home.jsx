import React, { useEffect } from 'react'
import { GET_MOVIES } from '../graphql/Query'
import { useLazyQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from './Hero'
import Navbar from './NavbarStar'
import MovieCard from './MovieCard';

const Home = () => {
  useEffect(()=>{
    getMovies()
  },[])
    const [getMovies,{error, data, loading}] = useLazyQuery(GET_MOVIES)

  if (error) return <h1>Error {error}</h1>
  if(data){

  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
      <>
        <Navbar/>
        <Hero/>
        <div className='collection'>
          <h4 className ="text-2xl font-bold text-white title-category" >Recommended</h4>
          <Slider {...settings} className="card-container">{
          data && data.getMovies.map(({id,image}) => (
              <MovieCard
                image={image}
                id={id}
              />
            ))
          }
        </Slider>
        </div>
      </>

  )
}

export default Home