import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  Content,
  FormContainer,
  Column,
  Card,
  TopContainer,
  GridContainer,
  FormGroup,
  BottomContainer,
  Row,
} from "../../styles/Login/styles";

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    let root = document.getElementById("__next");
    root.classList.add("loginPage");
    let buttonTop = document.getElementById("buttonTop");

    if (document.getElementById("buttonTop") !== null) {
      buttonTop.style.display = "none";
      buttonTop.style.visibility = "hidden";
    }

    return () => {
      root.classList.remove("loginPage");
    };
  }, []);

  const [data, setData] = useState({} as FormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isActiveButtonForm =
    data.email?.length >= 1 && data.password?.length >= 6;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth", data);
      console.log(response);
      // login(response.data.token);
      router.push("/");
      toast.success("Login feito com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error("E-mail ou senha inválidos", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        <Content>
          <h1>Login</h1>
          <FormContainer>
            <form method="POST" onSubmit={handleSubmit}>
              <ToastContainer style={{ fontSize: `1.6rem` }} />
              <Column>
                <Card>
                  <TopContainer>
                    <GridContainer>
                      <FormGroup>
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          onChange={handleChange}
                          autoComplete="off"
                          required
                        />
                      </FormGroup>

                      <FormGroup>
                        <input
                          type="password"
                          placeholder="Senha"
                          name="password"
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                    </GridContainer>

                    <FormGroup>
                      <button type="submit" disabled={!isActiveButtonForm}>
                        Entrar
                      </button>
                    </FormGroup>
                  </TopContainer>

                  <BottomContainer>
                    <Row>
                      <div>
                        <Link href="/signup">
                          <a>
                            Quer ser nosso aluno? Clique aqui para se cadastrar
                            como aluno.
                          </a>
                        </Link>
                      </div>

                      <div>
                        <Link
                          href={{
                            pathname: "/signup",
                            query: "teacher",
                          }}
                        >
                          <a>
                            É professor? Clique aqui para se cadastrar como
                            professor.
                          </a>
                        </Link>
                      </div>

                      <div>
                        <Link href="/signup/forgot">
                          <a>Esqueceu a senha?</a>
                        </Link>
                      </div>
                    </Row>
                  </BottomContainer>
                </Card>
              </Column>
            </form>
          </FormContainer>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
