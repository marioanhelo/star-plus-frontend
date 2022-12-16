import './App.css'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import Home from './components/Home'
import Navbar from './components/NavbarStar'
import Form from './components/Form'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from "./components/Login"
import Welcome from './Welcome'
import NotFound from './components/NotFound'
import MovieDetail from './components/MovieDetail'
import MyList from './components/MyList'
import Search from './components/Search'

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri:'http://127.0.0.1:3000/'
  })

  return (
    <Router>
      <ApolloProvider client={client}>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/create-movie' element={<Form/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/movie-details' element={<MovieDetail/>}/>
          <Route path='/my-list' element={<MyList/>}/>
          <Route  index element={<Welcome />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </ApolloProvider>
    </Router>
  )
}

export default App
