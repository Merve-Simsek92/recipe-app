import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/header/Header'
import Main from "../components/recipe/Main"
import About from "../components/about/About"
import Github from "../components/github/Github"
import Login from "../components/login/Login"
import Navbar from '../components/navbar/Navbar'
import RecipeCard from '../components/recipe/RecipeCard'
const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>

        <div className="main">
            <Routes>
             <Route path="/" element={<Main/>} /> 
             <Route path="/about" element={<About/>} />
             <Route path= "/github" element={<Github/>} />
             <Route path= "/login" element={<Login/>} /> 
             {/* <Route path="/Main/recipeCard" element={<RecipeCard/>} />  */}
            </Routes>

       </div>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter