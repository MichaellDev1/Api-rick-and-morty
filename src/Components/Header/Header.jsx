import styled from "styled-components";
import React, { useRef } from "react";
import { Link } from "wouter";
import logo from '../../../public/Assets/logo.png'

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  z-index: 99999;
  background: #fff;

`;

const Img = styled.img`
  width: 150px;
`;

const Nav = styled.nav`
  display: flex;
`;

const Span = styled.span`
  color: #1679fc;
`;

function Header() {

  const styleLinkHeader = {
    textDecoration: "none",
    padding: "10px 10px",
    color: "#9d9d9d",
    fontWeight: "500",
  };

  const styleLinkLogo = {
    textDecoration: "none",
    fontSize: "24px",
    color: "#8d8d8d",
    fontWeight: "500",
  };

  const refHeader = useRef();

  const handleScroll = (ref) => {
    refHeader.current.offsetHeight < scrollY ? (

      document.body.style.paddingTop = `${refHeader.current.offsetHeight}px`,
      refHeader.current.style = "position: fixed; top: 0; box-shadow: 0 0 10px rgba(0 0 0 / 10%)"
      
    ): (
      document.body.style.paddingTop = '0',
      refHeader.current.style = "position: position;"
    )
    
  };
  window.onscroll = handleScroll;

  return (
    <HeaderContainer ref={refHeader}>
      <div>
        <Link to="/" style={styleLinkLogo}>
          <img src={logo} width='55px' style={{cursor: "pointer"}}/>
        </Link>
      </div>
      <Nav>
        <Link to="/character" style={styleLinkHeader}>
          Character
        </Link>
        <Link to="/episode" style={styleLinkHeader}>
          Episode
        </Link>
        <Link to="/location" style={styleLinkHeader}>
          Location
        </Link>
      </Nav>
    </HeaderContainer>
  );
}

export default React.memo(Header);
