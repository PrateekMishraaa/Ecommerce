import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Dashboard from './Pages/Dashboard'
import MilkCategory from "../src/Pages/Category/MilkCategory.jsx"
import Login from './Pages/Login'
import BreadCategory from './Pages/Category/BreadCategory.jsx'
import EggCategory from './Pages/Category/EggCategory.jsx'
import FlakesCategory from './Pages/Category/FlakesCategory.jsx'
const App = () => {
  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/milk-category' element={<MilkCategory/>}/>
      <Route path='/bread-category' element={<BreadCategory/>}/>
      <Route path='/egg-category' element={<EggCategory/>}/>
      <Route path='/corn-flakes-category' element={<FlakesCategory/>}/>
    </Routes>
   </Router>
    </>
  )
}

export default App
