import Head from "next/head";

import { Container, Title } from "../../styles/SignUp/styles";

import Form from "../../components/FormSignUp";
import { GetServerSideProps } from "next";
import { useContext, useEffect, useState } from "react";

import { SignUpContext } from "../../contexts/SignUpContext";

interface SignUpProps {
  activeTeacher: string | string[];
}

const SignUp = (props: SignUpProps) => {
  const { activeTeacher } = props;
  const { setIsTeacher } = useContext(SignUpContext);

  const [title, setTitle] = useState("Aluno");

  useEffect(() => {
    if (Object.keys(activeTeacher).length !== 0) {
      setIsTeacher(true);
      setTitle("Professor");
    }

    return () => {
      setIsTeacher(false);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>
      <Container>
        <Title>Cadastro de {title}</Title>
        <Form />
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const activeTeacher = query;

  return {
    props: {
      activeTeacher,
    },
  };
};

export default SignUp;
