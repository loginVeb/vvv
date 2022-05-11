import React from 'react'
import styled from 'styled-components';
import burger from '../../1icons/hamburger-menu-svgrepo-com.svg';

const Sburger = styled.div`
  grid-area: 1/1/2/2;
  &:hover {
            color: #fefecc ;
        }
        &:active {
            color: #f0f0f0;
        }

`

function Burger() {
  return (
    <Sburger><img height="55px" src={burger} alt="burger" /></Sburger>
  )
}

export default Burger



