import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"
import Header from "../components/Header/Header"
import Subheader from "../components/Subheader/Subheader"
import Navigation from "../components/Navigation/Navigation"
import Button from "../components/Button/Button"
import backgroundImage from "../images/some-forest.jpg"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
  *,*::before, *::after {
    box-sizing: border-box;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem;
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <StyledWrapper>
      <Header>Gatsby</Header>
      <Subheader>+ friends</Subheader>
      <Navigation />
      <Button>Want more?</Button>
    </StyledWrapper>
  </>
)

export default IndexPage
