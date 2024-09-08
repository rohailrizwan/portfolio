import React from 'react'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Portfolio from '../Pages/Portfolio'
import Resume from '../Pages/Resume'

export default function Router() {
  return (
    // <div>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/Portfolio' element={<Portfolio/>}></Route>
        <Route path='/Resume' element={<Resume/>}></Route>
        </Routes>
        </BrowserRouter>
    // </div>
  )
}
