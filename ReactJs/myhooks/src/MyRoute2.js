import React from 'react';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Dahshboard from './Dahshboard';
import { Home } from './Dahshboard';
import { About } from './Dahshboard';
function MyRoute2() {
  return (
    <div>
        MyRoute2
         <BrowserRouter>
                 
                 <Routes>
                     <Route path="/" element={<Dahshboard/>}>
                         <Route index element={<Home/>} />
                         <Route path="about" element={<About/>}/>
                     </Route>
                 </Routes>
         </BrowserRouter>
      
    </div>
  )
}


export default MyRoute2

