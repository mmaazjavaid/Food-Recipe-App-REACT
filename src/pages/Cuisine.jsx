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
        
    }

    useEffect(()=>{
      getCuisine(params.type)
      console.log(cuisines)
    },[params.type])
       

  return (
    <Grid 
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
      {cuisines.map((item)=>{
        return(
          <Card key={item.id}>
            <Link to={'/recipe/'+item.id} >
            <img src={item.image} alt="" srcset="" />
            <h4>{item.title}</h4>
            </Link>
            
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid=styled(motion.div)`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
grid-gap:3rem;
`;

const Card=styled.div`

img{
  width:100%;
  border-radius:2rem;
}
a{
  text-decoration:none;
}
h4{
  text-align:center;
  padding:1rem;
}

`;
export default Cuisine