import React from 'react';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import {Pizza} from '@styled-icons/fluentui-system-filled/FoodPizza';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
function Category() {
  return (
    <>
    <List>
      <NavLink to={'/cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4>
          Italian
        </h4>
      </NavLink>
      <NavLink  to={'/cuisine/Italian'}>
        <FaHamburger/>
        <h4>
          American
        </h4>
      </NavLink>
      <NavLink to={'/cuisine/Italian'}>
        <GiNoodles/>
        <h4>
          Thai
        </h4>
      </NavLink>
      <NavLink to={'/cuisine/Italian'}>
        <GiChopsticks/>
        <h4>
          Italian
        </h4>
      </NavLink>
    </List>
    </>
  )
}
const List= styled.div `
display:flex;
justify-content:center;
margin:2rem 0rem;
`;
export default Category