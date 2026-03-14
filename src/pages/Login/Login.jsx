import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Title,
  Input,
  Button,
  RegisterLink,
  Logo,
  LogoText,
  ErrorMessage,
} from "./Login.styles";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Cria admin padrão automaticamente
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (!users.find((u) => u.role === "admin")) {
      users.push({
        id: Date.now(),
        name: "Administrador",
        email: "admin@burger.com",
        password: "123456",
        role: "admin", // MUITO IMPORTANTE
      });
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);

  function handleLogin(e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // procura usuário com email e senha corretos
    const userFound = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      localStorage.setItem("loggedUser", JSON.stringify(userFound)); // salva o usuário logado

      // redireciona para admin ou home dependendo da role
      if (userFound.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } else {
      setError("Email ou senha inválidos");
    }
  }

  return (
    <Container>
      <Logo>
        <LogoText>Burger Express!</LogoText>
      </Logo>

      <Form onSubmit={handleLogin}>
        <Title>Login</Title>

        <Input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Entrar</Button>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <RegisterLink onClick={() => navigate("/register")}>
          Criar conta
        </RegisterLink>
      </Form>
    </Container>
  );
}

export default Login;