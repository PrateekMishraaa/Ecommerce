import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Dashboard from './Pages/Dashboard'
import MilkCategory from "../src/Pages/Category/MilkCategory.jsx"
import Login from './Pages/Login'
const App = () => {
  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/milk-category' element={<MilkCategory/>}/>
    </Routes>
   </Router>
    </>
  )
}

export default App
