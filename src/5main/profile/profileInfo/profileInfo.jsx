import React from 'react';
import styled from 'styled-components';
import img from './img.jpg';

const SProfileInfo = styled.div`
grid-area:1/1/3/13;
display:flex;
flex-direction:column;
background: #cefefe ;
color:green;
font-family:'tucsononewoff2';
border: solid 0.1px blue ;
`
const ProfileInfo = () => {
  return (
    <SProfileInfo >
      <div>
        <img src={img} alt="ura" height="30px"
          width="30px" />
      </div>
      <div>
        Ava+discription
      </div>
    </SProfileInfo>
  );
};

export default ProfileInfo;