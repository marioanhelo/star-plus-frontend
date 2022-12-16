import React from 'react'
import Navbar from './NavbarStar'
import { useLazyQuery, gql } from '@apollo/client';
import { SEARCH_MOVIES } from '../graphql/Query'
import MovieCard from './MovieCard';

const Search = () => {
    const [executeSearch, { data }] = useLazyQuery(
      SEARCH_MOVIES
    );
  return (
    <>
        <Navbar/>
        <div className="sc-ijhsb cgGUmN">
            <form>
                <input className="sc-gohEOc jEhbaE inputH1 text--left" aria-label="Título o equipo" id="search-input" placeholder="Título" type="search"
                    onChange={(e) => executeSearch({
                        variables: { filter: e.target.value }

                    })}
                />
                    <button aria-label="Clear search field" type="reset" className="sc-gKLXLV dnMjFC">
                        <svg aria-hidden="true" aria-label="close" color="#f9f9f9" role="img" transform="" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className="sc-jhAzac hLaVUE">
                            <title></title>
                            <path d="M17.9 16.239l8.833-9.085c.255-.266.629-.404 1.01-.404.248 0 .491.056.706.175.641.338.817 1.121.301 1.649l-9.081 9.342 9.08 9.312c.517.53.343 1.311-.313 1.657-.546.287-1.276.2-1.7-.231l-8.835-9.062-8.838 9.064c-.421.428-1.152.516-1.699.229-.655-.346-.829-1.127-.312-1.657l9.08-9.312-9.08-9.341c-.516-.529-.34-1.312.313-1.657.202-.112.445-.168.693-.168.382 0 .755.138 1.007.4l8.836 9.089z" className="sc-hzDkRC kzwgVO"></path>
                        </svg>
                    </button>
            </form>
        </div>
        <div className='collection mt-32'>
          <h4 className ="text-2xl font-bold text-white title-category" >Results</h4>
          <div className='card-container'>

          <div className="grid gap-4 grid-cols-4">{
          data && data.search.map(({id,image}) => (
              <MovieCard
                image={image}
                id={id}
              />
            ))
          }
        </div>
          </div>
        </div>
    </>
  )
}

export default Search