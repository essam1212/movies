import {  BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import About from './componant/About/About'
import Home from './componant/Home/Home'
import Navpar from './componant/Navpar/Navpar'
import Movis from './componant/movis/Movis'
import Tv from './componant/TV/Tv'
import People from './componant/People/People'
import Network from './componant/Network/Network'

import Notfound from './componant/notfound/Notfound'
import Details from './componant/Movie detailse/Details'
import TvDetails from './componant/tvDetails/TvDetails'
import PeopleDetails from './componant/peopleDetails/PeopleDetails'
import { MediaContextProvieder } from './componant/context/context'
import ScrollToTop from './componant/ScrollToTop'

export function App() {

  return <>
    <div className=' container-fluid'>

      <Navpar />

      <MediaContextProvieder>

      <ScrollToTop />

      <Routes>
            <Route path='/trending' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='movis' element={<Movis />} />
            <Route path='tv' element={<Tv />} />
            <Route path='people' element={<People />} />
            <Route path='network' element={<Network />} />

            <Route path='moviedetails' element={<Details />}>
              <Route path=':id' element={<Details />} />
            </Route>
            <Route path='tvdetails' element={<TvDetails />}>
              <Route path=':id' element={<TvDetails />} />
            </Route>
            <Route path='peopleDetails' element={<PeopleDetails />}>
              <Route path=':id' element={<PeopleDetails />} />
            </Route>

            <Route path='*' element={<Notfound />} />


          </Routes>
          
      </MediaContextProvieder>

    </div>



  </>
}





