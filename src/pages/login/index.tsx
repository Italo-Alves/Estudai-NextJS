import Head from 'next/head'
import Link from 'next/link'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import * as yup from 'yup'

import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'

import api from '../../services/api'

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

  const onSubmit = async (data: FormData) => {
    try {
      const response = await api.post('/auth', data)
      console.log(response, data)
      toast.success('Login feito com sucesso', {
        autoClose: 2500,
        bodyStyle: {
          fontSize: 14,
        },
      })
    } catch (error) {
      console.log(error)
      toast.error('E-mail ou senha inválidos', {
        autoClose: 3000,
        bodyStyle: {
          fontSize: 14,
        },
      })
    }
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
