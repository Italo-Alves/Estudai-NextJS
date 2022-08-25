import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { useContext } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify'
import * as yup from 'yup'
import { parseCookies } from 'nookies'

import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'
import { AuthContext } from '../../contexts/AuthContext'

import {
  Main,
  Container,
  Card,
  Form,
  BackContainer,
  ButtonContainer,
} from '../../styles/Login/styles'

interface FormData {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('E-mail obrigatório'),
  password: yup
    .string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .required('Senha obrigatória'),
})

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(signInFormSchema),
  })

  const { signIn } = useContext(AuthContext)

  const onSubmit = async (data: FormData) => {
    await signIn(data)
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Main>
        <ToastContainer />
        <Container>
          <h2>Login</h2>
          <Card>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Input
                  {...register('email')}
                  name="email"
                  type="email"
                  placeholder="Digite seu email..."
                  hasRoundedBorder
                  error={errors.email}
                />

                <Input
                  {...register('password')}
                  name="password"
                  type="password"
                  placeholder="********"
                  hasRoundedBorder
                  error={errors.password}
                />
              </div>

              <BackContainer>
                <div>
                  <input type="checkbox" name="remember-me" id="remember-me" />
                  <label htmlFor="remember-me">Lembrar-me</label>
                </div>

                <div>
                  <Link href="#">
                    <a>
                      <span>Esqueceu a senha?</span>
                    </a>
                  </Link>
                </div>
              </BackContainer>
              <ButtonContainer>
                <Button type="submit">Fazer login</Button>
                <p>
                  Não cadastrado ainda?
                  <Link href="/signup">
                    <a>
                      <span>Crie uma conta</span>
                    </a>
                  </Link>
                </p>
              </ButtonContainer>
            </Form>
          </Card>
        </Container>
      </Main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)

  if (cookies['estudai.token']) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
