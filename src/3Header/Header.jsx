import React from 'react';
import img from './img/header1.png';
import styled from 'styled-components';
 import Burger from './burgerMeny/burger.jsx';
 


const SHeader = styled.header`
  grid-area: 1/1/2/13;
  display: grid;
  grid-template-columns:repeat(12, 8.333%); 
  grid-template-rows:repeat(12, 8.333%); 
  background-image: url(${img});
  background-size:cover;
  font-family:"Fonwoff2" ;
  border: solid 0.2px blue; 

`


const Header = () => {
  return (
    <SHeader>
       <Burger/>
    </SHeader>
  );

};

export default Header;