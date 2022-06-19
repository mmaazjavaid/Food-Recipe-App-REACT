import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Cuisine() {

    const getCuisine=async(name)=>{
        const api=await fetch(``);
        const data=api.json();
        
    }


  return (
    <div>Cuisine</div>
  )
}

export default Cuisine