import React from 'react';
import styled from 'styled-components';
//import Users from './user/user.jsx'

const SMessages = styled.div`
grid-area:1/5/13/13;
background: #cefefe ;
color:green;
font-family:DSMoster.woff ;
//border: solid 0.2px blue ;
`
 const Messages = () => {
  return (
<SMessages>
  <div> привет  </div>
 <div> здравствуйте </div>
 <div> пока  </div>
 <div> дасвидание  </div>
 </SMessages>
  );
};

export default Messages;