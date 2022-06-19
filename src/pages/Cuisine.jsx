import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Cuisine() {

    const [cuisines,setcuisines]=useState([])
    let params=useParams(); 
    const getCuisine=async(name)=>{
        const api=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const data=await api.json()
        setcuisines(data.results)  
        console.log(cuisines)
    }

    useEffect(()=>{
      getCuisine(params.type)
     
    },[params.type])

       

  return (
    <div>Cuisine</div>
  )
}

export default Cuisine