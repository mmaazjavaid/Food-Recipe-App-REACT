import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue';
function Popular() {

    const [popular, setpopular] = useState([])
    useEffect(() => {
        getRecipes()
    }, [])


    const getRecipes = async () => {
        const check_data=localStorage.getItem("popular");
        if(check_data){
            setpopular(JSON.parse(check_data))
            console.log("from local storage")
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await api.json()
            localStorage.setItem("popular",JSON.stringify(data.recipes))
            setpopular(data.recipes)
            console.log("from api")
        }
    }
    return (
        <Wrapper>
            <h3>Popular Picks</h3>
            <Splide
            options={{
                perPage:4,
                rewind:true,
                autoplay:true,
                // arrows:false,
                // pagination:false,
                gap:'5rem',
                drag:"free"
            }}
            >
                {popular.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={'/recipe/'+recipe.id} >
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                                <Gradient/>
                                </Link>
                                
                            </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Wrapper>
    )
}


const Wrapper = styled.div`
 margin:4rem 0rem;
`;
const Card = styled.div`
   height:15rem;
   width:15rem;
   border-radius:2rem;
   overflow:hidden;
   position: relative;
   img{
    
    border-radius: 2rem;
    position: absolute;
    left: 0%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius:2rem;
   }
   p{
    position: absolute;
z-index: 10;
left: 50%;
bottom: 0%;
transform: translate(-50%,0%);
color: white;
width: 100%;
text-align: center;
font-weight: 600;
font-size: 1rem;
height: 40%;
display: flex;
justify-content: center;
align-items: center;
   }

`;

const Gradient=styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.7));
`;

export default Popular