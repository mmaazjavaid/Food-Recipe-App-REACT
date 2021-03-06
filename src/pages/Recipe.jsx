import React from 'react'
import { useState,useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
function Recipe() {
  const [details,setdetails]=useState({});  
  const [activetab,setactivetab]=useState("Instructions");
  const params=useParams();
  const fetchDetails=async()=>{
    const api= await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const data=await api.json();
    setdetails(data);
  }
  useEffect(()=>{
    fetchDetails();
    
  },[])
  console.log(details.extendedIngredients);  
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="image"  />
      </div>
      <Info>
        <div style={{display:"flex",marginBottom:"20px"}}>
        <Button
         className={activetab==="Instructions"? "active":""}
         onClick={()=> setactivetab("Instructions")  }>Instructions</Button>
        <Button
        className={activetab==="Ingredients"? "active":""}
        onClick={()=> setactivetab("Ingredients")}>Ingredients</Button>
        </div>
        {activetab==="Instructions" && (
 <div>
 <h4 dangerouslySetInnerHTML={{__html:details.summary}}></h4>
 <h4 dangerouslySetInnerHTML={{__html:details.instructions}}></h4>
</div>
        )}
       
        {activetab==="Ingredients" && (
          <ul>
          {details.extendedIngredients.map((Ingredient)=>{
            return <li key={Ingredient.id}>{Ingredient.original}</li>
          })}
        </ul>
        )}
      </Info>
    </DetailWrapper>
  )
  
}
const DetailWrapper=styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;
.active{
  background: linear-gradient(35deg,#494949,#313131);
color: white;
}
h2{
  margin-bottom:2rem;
}
li{
font-size:1.2rem;
line-height:2.5rem;
}
ul{
margin-top:2rem;
}
`;
const Button=styled.div`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor:pointer;
`;
const Info =styled.div`
 margin-left:5rem;
`
export default Recipe