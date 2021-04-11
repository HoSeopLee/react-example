import React from 'react';
import styled from 'styled-components';

const Menu = props => {
 return(
   <TestStyled>
     styled-components 사용하기 
   </TestStyled>
 ) 
}
const TestStyled = styled.div`
  font-size:50px;
  color: white;
  background-color: black;
`
export default Menu