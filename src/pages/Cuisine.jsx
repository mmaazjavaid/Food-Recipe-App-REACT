import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Cuisine() {

    const getCuisine=async(name)=>{
        const api=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=italian`);
        const data=api.json()
        
        
    }

    getCuisine();


  return (
    <div>Cuisine</div>
  )
}

export default Cuisine