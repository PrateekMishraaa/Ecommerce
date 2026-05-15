import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Dashboard from './Pages/Dashboard'
import MilkCategory from "../src/Pages/Category/MilkCategory.jsx"
import Login from './Pages/Login'
import BreadCategory from './Pages/Category/BreadCategory.jsx'
import EggCategory from './Pages/Category/EggCategory.jsx'
import FlakesCategory from './Pages/Category/FlakesCategory.jsx'
import Register from './Pages/Register.jsx'
import ProtectedRoutes from './Components/ProtectedRoutes.jsx'
import MueslyCategory from './Pages/Category/MueslyCategory.jsx'
import OatsCategory from './Pages/Category/OatsCategory.jsx'
import PaneerCategory from './Pages/Category/PaneerCategory.jsx'
import AddToCart from './Pages/AddToCart.jsx'
const App = () => {
  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/milk-category' element={<ProtectedRoutes>
        <MilkCategory/>
      </ProtectedRoutes>}/>
      <Route path='/bread-category' element={<ProtectedRoutes>
        <BreadCategory/>
      </ProtectedRoutes>}/>
      <Route path='/egg-category' element={<ProtectedRoutes>
        <EggCategory/>
      </ProtectedRoutes>}/>
      <Route path='/corn-flakes-category' element={<ProtectedRoutes>
        <FlakesCategory/>
      </ProtectedRoutes>}/>
      <Route path='/muesly-category' element={<ProtectedRoutes>
        <MueslyCategory/>
      </ProtectedRoutes>}/>
      <Route path='/oats-category' element={<ProtectedRoutes>
        <OatsCategory/>
      </ProtectedRoutes>}/>
      <Route path='/paneer-category' element={<ProtectedRoutes>
        <PaneerCategory/>
      </ProtectedRoutes>}/>
      <Route path='/products/AddToCart' element={<ProtectedRoutes>
        <AddToCart/>
      </ProtectedRoutes>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
   </Router>
    </>
  )
}

export default App
