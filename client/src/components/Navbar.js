import React from 'react'
import styled from 'styled-components'
import logo from './logo.png'
const Container = styled.div`
z-index:7;
    height:  110px;
    display: flex;
    
    align-items: center;

    //color 2
    background-color: white;
    justify-content: space-between;
border-bottom: 2px solid grey;
  
`;
const Left = styled.div`

    flex-grow: 1;
    display:flex;
    align-items: center;
   
`
const Logo = styled.img`

height: 90px;
align-items: center;
cursor: pointer;
`
const Rigth = styled.div`
     flex-grow: 1;
    display: flex;
    
    align-items: center;
    justify-content: flex-end;
    
  
`
const Center = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    
  
`

export const Navbar = () => {
  return (
    <Container>
    <Left>
                    
                        <Logo img src={logo} />
                    
                </Left>
                <Center>
<h1>Detalles De parada de Maquinas</h1>
                </Center>
                <Rigth>

                </Rigth>
                </Container>
  )
}
