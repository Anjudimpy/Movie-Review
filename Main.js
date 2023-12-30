
import Header from './Header';
import Cards from './Cards';
import AddMovie from './AddMovie';
import { Route, Routes } from 'react-router-dom';
import Details from './Details';
const Main = () => {
  return (
   <div className='Main relative'>
    <Header/>
    <Routes>
   <Route path='/' element={ <Cards/>}/>
   <Route path='/addmovie' element={ <AddMovie/>}/>
   <Route path='/details/:id' element={ <Details/>}/>
    </Routes>
    </div>
  )
}

export default Main