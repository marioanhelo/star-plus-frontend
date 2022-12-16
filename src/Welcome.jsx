import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
    const navigate = useNavigate();
  return (
    <div className='main-screen max-h-full'>
        <button className='mt-1 justify-end flex items-end absolute right-2 text-white bg-slate-700' onClick={()=>{
            navigate("/login");
        }}>Login</button>
            <div className="suscribe flex items-end justify-center h-screen">
                <div className="w-6/12 p-4 text-center bg-transparent justify-items-center rounded-lg sm:p-8">
                    <div className="justify-items-center mx-auto pb-10 flex justify-center">
                        <img src="//cnbl-cdn.bamgrid.com/assets/e41020c93fec10692725897c2cffbc75a1c59a6855b2cb702d85b45c596a81e7/original" width="200" height="60" alt="Star+ logo"/>
                    </div>
                    <h5 className="mb-2 text-4xl font-bold text-white dark:text-white">Series, películas y los deportes que te gustan</h5>
                    <div className='flex place-items-center  mx-auto pb-10 justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4'>
                        <div className ="flex-auto">
                            <img src="//cnbl-cdn.bamgrid.com/assets/122c74e7136e05cbb7bc4c36e05567e13b03b9db659f5a31bb70b0100aff056f/original" width="400" height="286" alt="Combo+ logo"/>
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SUSCRÍBETE AHORA</button>
                        </div>
                        <div className= "flex-auto">
                            <img src="//cnbl-cdn.bamgrid.com/assets/6d0514420af1aa17883ea433aeab05eeefb1ea60fdc9185c2c182d0c92273435/original" width="400" height="286" alt="Lionsgate logo"/>
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SUSCRÍBETE AHORA</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Welcome