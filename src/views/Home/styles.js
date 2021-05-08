import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #08080E;
`;

export const Header = styled.div`
  color: #ffff;
  width: 100%;
  height: 100px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin: 0 auto;
  width: 80%;
  height: 100%;

  h1 {
    font-size: 36px;
    font-weight: bold;
  }

  span {
    font-size: 36px;
    font-weight: bold;
    color: #EFA649;
  }

  button {
    width: 240px;
    height: 47px;
    font-size: 18px;
    font-weight: bold;
    border: 4px solid #EFA649;
    border-radius: 10px;
    background: transparent;
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: #EFA649;
      text-decoration: none;
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;  
`;

export const Content = styled.div`
  width: 80%;  
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-justify;
`;

export const Box = styled.div`
  width: 80%;

  margin: 0 auto;
`; 

export const RightBoxContent = styled.div`
  display: grid;

  h1 {
    font-size: 120px;
    font-weight: bold;
    color: #fff;
    line-height: 100px;
    margin-top: 110px;

    display: grid;

    &::after { 
      margin: 50px 0 10px;
      width: 90px;
      height: 10px;
      content: '';
      background: #EFA649;
    }
  }

  span {
    color: #fff;
    font-size: 60px;
    font-weight: bold;
    line-height: 50px;

    &:last-child {
      color: #EFA649;
      font-size: 60px;
      font-weight: bold;
    }
  }

  small {
    color: #fff;
    font-size: 13px;
    margin-top: 60px;

    span {
      font-size: 13px !important;
    }
  }
`;

export const LeftBoxContent = styled.div`
  display: grid;
  margin-left: 140px;

  span {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    line-height: 50px;
    margin-top: 32px;

    &:last-child {
      color: #EFA649;
      font-size: 60px;
      font-weight: bold;
    }
  }

  h2 {
    color: #fff;
    font-size: 32px;
    font-weight: normal;
    line-height: 38px;
    margin: 100px 0 20px;
  }

  p {
    width: 600px;
    color: #fff;
    font-size: 32px;
    font-weight: normal;
    line-height: 38px;
  }
`; 


export const IconList = styled.div`
  ul {  
    list-style: none;
    display: flex;
    padding: 20px 0;

    svg {
      &:hover {
        fill: #EFA649;
      }
    }
        
    
  }

`;