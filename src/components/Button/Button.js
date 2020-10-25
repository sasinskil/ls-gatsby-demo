import styled from "styled-components"

const Button = styled.button`
  position: relative;
  margin-top: 30px;
  padding: 10px 20px;
  width: 100%;
  max-width: 170px;
  font-family: "Montserrat";
  background: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition: 0.2s ease-in-out;
  transition-property: background, color;

  :hover {
    color: #000000;
    background: #ffffff;
  }
`

export default Button
