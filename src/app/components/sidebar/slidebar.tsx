'use client'
import Image from 'next/image';
import { useGlobalState } from '@/app/context/globalProvider';
import React from 'react'
import styled from 'styled-components'

const SlideBar = () => {
  const {theme} = useGlobalState();
  
  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
        <Image src="/pic1.jpg" height={70} width={70} alt='Profile' />
        </div>
       <h1>
        <span>Rafia</span>
        <span>Khurshid</span>
       </h1>
      </div>
      <ul className="nav-items">
        
      </ul>
    </SidebarStyled>
  )
}
const SidebarStyled = styled.nav`
position: relative;
width:${(props) => props.theme.sidebarWidth};
background-color: ${(props)=>props.theme.colorBg2};
border:2px solid ${(props)=> props.theme.borderColor2};
border-radius:1rem;
`;
export default SlideBar
