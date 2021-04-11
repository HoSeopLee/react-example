import React,{useState} from 'react';
import styled from 'styled-components'
import Logo from '../../images/starbucks.png'
import { IoIosMenu } from "react-icons/io";

const  Menu=()=> {
  const [menu, setmenu] = useState(false) // reactHooks    
  console.log(menu)
  return (
    <Common>
      <LogoImg src={Logo}/>

      <ContlorBox menu={menu}>
        <Contlor href='/connect'>계약</Contlor>
        <Contlor href='/login'>로그인</Contlor>
        <Contlor href='/signup'>회원가입</Contlor>
      </ContlorBox>
      <Menubar href='#' onClick={() => {
        setmenu(!menu)}}>
          <IoIosMenu></IoIosMenu>
      </Menubar>

    </Common>
  );
}


const Common = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`

const ContlorBox = styled.div`

    display: flex;
    align-items:center;
    @media screen and (max-width: 500px) {
        
        flex-direction: column;
        align-items:flex-end;
        display: ${({menu}) => {
           return menu === false ? 'none' : 'flex'
        }};
    }
`
const LogoImg = styled.img`
    width:80px;
`


const Contlor = styled.a`
    margin: 10px;
    text-decoration: none;
    color: black;
`
const Menubar = styled.a`
  display: flex;
  align-items:center;
  font-size: 30px;
  position: absolute;
  right: 32px;
  @media screen and (min-width: 500px) {
      display: none;    
  }
`
export default Menu