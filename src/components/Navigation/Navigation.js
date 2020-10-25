import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWapper = styled.ul`
  padding: 0;
  margin: 7px 0 0;
  list-style: none;
  font-family: "Montserrat";
  color: #ffffff;
  font-weight: 400;
  display: flex;
  font-size: 0.7rem;
`
const NavigationItem = styled.li`
  margin-right: 15px;
  position: relative;

  ::after {
    position: absolute;
    top: 0;
    right: -9px;
    width: 0.05rem;
    height: 100%;
    content: "";
    display: block;
    background: #ffffff;
  }

  :last-child::after {
    display: none;
  }
`

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`

const Navigation = () => (
  <NavigationWapper>
    <NavigationItem>
      <StyledLink to={"/one"}>One</StyledLink>
    </NavigationItem>
    <NavigationItem>
      <StyledLink to={"/two"}>Two</StyledLink>
    </NavigationItem>
    <NavigationItem>
      <StyledLink to={"/three"}>Three</StyledLink>
    </NavigationItem>
  </NavigationWapper>
)

export default Navigation
