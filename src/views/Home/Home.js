import React from 'react';

import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

import {
  Container,
  Header,
  HeaderContent,
  ContentContainer,
  Content, 
  Box,
  RightBoxContent,
  LeftBoxContent,
  IconList
} from './styles'

function Home() {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <h1>
            Junior
            <span>es</span>
          </h1>
          <button>
            <a href="mailto:cristiano_junior99@outlook.com">Fale comigo</a>
          </button>
        </HeaderContent>
      </Header>
      <ContentContainer>
        <Content>
          <Box>
            <RightBoxContent>
              <h1>Cristiano <br/>Junior</h1>
              <span>
                Desenvolvedor de
                <span> Software</span>
              </span>

              <small>
                Design e desenvolvimento por 
                <span> Eu mesmo</span>
              </small>
            </RightBoxContent>
          </Box>
          <Box>
            <LeftBoxContent>
              <h2>
                Olá,
              </h2>
              <p>
                Sou apaixonado por inovação, tecnologias e metodologias. Estou graduando em Engenharia de Software, pela UFC e trabalhando como desenvolvedor front-end, focado na experiência do usuário, atuando com todo ecossistema Javascript.
              </p>

              <span>
                Vamos bater um papo? 
              </span>

              <IconList>
                <ul>
                  <li>
                    <a href="https://www.instagram.com/cristianojr9/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram color="#fff" size={25}/>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Cristianojr9" target="_blank" rel="noopener noreferrer" >
                    <FaGithub color="#fff" style={{marginLeft: '20'}} size={25}/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/cristianojr9/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn color="#fff" style={{marginLeft: '20'}}  size={25} />
                    </a>
                  </li>
                </ul>
                
                
                
              </IconList>
            </LeftBoxContent>
          </Box>
        </Content>
      </ContentContainer>
    </Container>
  )
}

export default Home;