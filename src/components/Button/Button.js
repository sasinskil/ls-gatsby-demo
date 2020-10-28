import styled from "styled-components"

const Button = styled.button`
  position: relative;
  margin-top: 30px;
  padding: 10px 20px;
  width: 100%;
  max-width: 170px;
  font-family: "Montserrat";
  background: #ffffff;
  color: #000000;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease;

  :hover {
    transform: translate(-4px, -4px);
  }

  :hover::before {
    transform: translate(4px, 4px);
  }

  ::before {
    position: absolute;
    content: "";
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border: 1px solid #ffffff;
    transition: transform 0.3s ease;
  }
`

export default Button
