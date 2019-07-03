import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../logo.svg";
import { ButtonContainer } from "./Button";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-dark  px-sm-5">
        <Link to="/">
          <img src={Logo} className="navbar-brand" alt="" />
        </Link>
        <ul className="navbar-nav align-item-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/card" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my card
          </ButtonContainer>
        </Link>
      </Nav>
    );
  }
}
export default Navbar;

const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
  }
`;
