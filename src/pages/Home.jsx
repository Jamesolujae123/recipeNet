import React from 'react'
import Prime from '../components/Prime'
import Prim from '../components/Prim'
import "./Home.css"

const Home = () => {
  return (
    <div>
        <Prime />
        <Prim topting={"Recent Recipes"} heading={"Trending"}/>
        
    </div>
  )
}

export default Home
