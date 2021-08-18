import styled from 'styled-components';

export const HeadContainer = styled.div`
  background-color: white;
  display: flex;
  text-decoration: none;

  .nav-bar {
    height: 100px;
    width: 100vw;
    box-shadow: -3px -2px 8px 1px #969696;
  }

  .header-logo {
    margin-left: 35px;
    margin-top: 24px;
  }

  .nav-bar {
    display: flex;
  }

  .columns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  .left-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left-col ul {
    display: flex;
  }
  .left-col ul li {
    margin: 10px;
    list-style: none;
  }

  /* .left-col ul li a{
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 2px;
  } */

  .right-col{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-col ul {
    display: flex;
  }

  .right-col ul li {
    margin: 10px;
    list-style: none;
    margin-right: 40px;
  }

`;

export const Logo = styled.img`
  height: 50px;
  width: 50px;
  margin: 5px;
`;

export const TextHeader = styled.a`
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 2px;

  :hover {
    color: green;
  }
`;

export const ButtonHeader = styled.a`
  text-decoration: none;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: 30px;
  padding: 10px;
  border: solid 1px black;


  &:hover{
    background-color: ${(props) => props.hoverColor};
    transition: 0.3s ease;
  }
`;
