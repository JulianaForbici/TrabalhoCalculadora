import React, { useState } from 'react'; 
import styled from "styled-components";

const Container = styled.div`
  width: 30rem;
  height: auto;
  background-color: #000;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #ff69b4;  
  padding: 30px 20px;
  border-radius: 2rem;
  gap: 20px;
  @media screen and (max-width: 500px){
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

const Input = styled.input`
  border-radius: 1rem;
  width: 70%;
  border: 1px solid #ff69b4;  
  padding: 5px 20px;
  font-size: 1.5rem;
  text-align: end;
  background-color: #C672FF80;  
  color: #ff69b4;  
  font-weight: 600;
`;

const ButtonsDiv = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`;

const Button = styled.button`
  border-radius: 1rem;
  width: 2rem;
  height: 3rem;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #ff69b4;  
  background-color: transparent;
  border: 2px solid #ff69b4;  
  cursor: pointer;

  &:hover {
    background-color: #ffd700;  
    color: #000;  
  }
`;

const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Result = styled.span`
  font-size: 2rem;
  background-color: #C672FF80;  
  border: 1px solid #ff69b4;  
  border-radius: 1rem;
  padding: 10px 20px;
  font-weight: 600;
  color: #ff69b4;  
  margin-left: 10px;
  width: 150px;  
`;

const ResultContainerStyled = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #000;
  border: 2px solid #ff69b4;
  border-radius: 1rem;
  padding: 20px;
  color: #ff69b4;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ResultButton = styled.button`
  background-color: #ff69b4;
  color: #000;
  border: none;
  border-radius: 1rem;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ffd700;  
  }
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
`;

export default function Calculadora() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();
  const [showResult, setShowResult] = useState(false);

  const capturarPrimeiroValor = (evento) => {
    setPrimeiroValor(Number(evento.target.value));
  }

  const capturarSegundoValor = (evento) => {
    setSegundoValor(Number(evento.target.value));
  }

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
    setShowResult(true);
  }

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
    setShowResult(true);
  }

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
    setShowResult(true);
  }

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
    setShowResult(true);
  }

  const fecharResult = () => {
    setShowResult(false);
  }

  return (
    <Container>
      <h2>Calculadora:</h2>
      <Input onChange={capturarPrimeiroValor} type="text" />
      <Input onChange={capturarSegundoValor} type="text" />
      <ButtonsDiv>
        <Button onClick={soma}>+</Button>
        <Button onClick={subtracao}>-</Button>
        <Button onClick={divisao}>/</Button>
        <Button onClick={multiplicacao}>X</Button>
      </ButtonsDiv>
      <ResultContainer>
        <Image src="https://cdn-icons-png.flaticon.com/512/2003/2003470.png" alt="Resultado" />
        <Result>{resultado}</Result>
      </ResultContainer>
      <ResultContainerStyled show={showResult}>
        <h3>RESULTADO:</h3>
        <p>O resultado é {resultado}</p>
        <ResultButton onClick={fecharResult}>Sair</ResultButton>
      </ResultContainerStyled>
    </Container>
  );
}

