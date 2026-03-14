import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Form,
  Title,
  Input,
  Button,
  LoginLink,
  ErrorMessage,
  SuccessMessage,
  LogoText,
  Logo,
} from "./Register.styles";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError("Preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      setError("Já existe uma conta com esse e-mail.");
      return;
    }

    users.push({
      id: Date.now(),
      name,
      email,
      password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    setSuccess("Conta criada com sucesso!");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }

  return (
    <Container>
      <Logo>
        <LogoText>Burger Express!</LogoText>
      </Logo>
      <Form onSubmit={handleSubmit}>
        <Title>Criar Conta</Title>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <Input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
        />

        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
        />

        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar senha"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <Button type="submit">Cadastrar</Button>

        <LoginLink onClick={() => navigate("/login")}>Já tenho conta</LoginLink>
      </Form>
    </Container>
  );
}

export default Register;
