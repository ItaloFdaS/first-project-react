import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import People from "../../assets/people.svg";

import Arrow from "../../assets/arrow.svg";

import { H1 } from "../../components/Title/styles";

import { ContainerItens } from "../../components/ContainerItens/styles";

import { Container, Image, InputLabel, Input } from "./styles";

import { Button } from "../../components/Button/styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    navigate("/usuarios");
  }

  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button to="/usuarios" onClick={addNewUser}>
          Cadastrar <img alt="arrow" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
