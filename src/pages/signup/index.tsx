import Head from 'next/head'
import { useRouter } from 'next/router'
import { FocusEvent, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

import { Input } from '../../components/Form/Input'
import { InputMask } from '../../components/Form/InputMask'
import { Button } from '../../components/Form/Button'
import { Select } from '../../components/Form/Select'
import { stateOptions } from '../../components/Form/SelectOptions'

import { api } from '../../services/api'

import {
  Container,
  Card,
  BlockPersonalData,
  BlockAddress,
  BlockContact,
  BlockLogin,
} from '../../styles/SignUp/styles'

interface FormData {
  fullName: string
  nickName?: string
  cpf: string
  birthday: string
  postalCode: string
  state: string
  city: string
  street: string
  neighborhood: string
  addressNumber: string
  details?: string
  foneMobile: string
  foneHome?: string
  email: string
  password: string
  confirmPassword?: string
}

const signUpFormSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(4, 'Digite seu nome completo')
    .matches(/^[a-zA-Z\s]*$/, 'Apenas letras')
    .required('Nome obrigatório'),
  nickName: yup
    .string()
    .max(30, 'Apelido deve ter no máximo 30 caracteres')
    .matches(/^[a-zA-Z\s]*$/, 'Apenas letras')
    .optional(),
  cpf: yup.string().required('CPF obrigatório'),
  birthday: yup.string().required('Data de Nascimento é obrigatória'),
  postalCode: yup.string().min(8, 'CEP inválido').required('CEP obrigatório'),
  state: yup.string().required('Estado obrigatório'),
  city: yup.string().required('Cidade obrigatória'),
  street: yup.string().required('Rua obrigatória'),
  neighborhood: yup.string().required('Bairro obrigatório'),
  addressNumber: yup
    .string()
    .max(5, 'Máximo 5 caracteres')
    .matches(/^[0-9][A-Za-z0-9]*(?:[A-Za-z0-9]+)*$/, 'Deve começar com número')
    .required('Número obrigatório'),
  details: yup
    .string()
    .max(30, 'Complemento deve ter no máximo 30 caracteres')
    .optional(),
  foneMobile: yup.string().required('Telefone celular é obrigatório'),
  foneHome: yup.string().optional(),
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('E-mail obrigatório'),
  password: yup
    .string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .required('Senha obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Senhas não conferem'),
})

export default function SignUp() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    setFocus,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(signUpFormSchema),
  })
  const router = useRouter()
  const [isApiCepError, setIsApiCepError] = useState<boolean>()

  const onSubmit = async (data: FormData) => {
    delete data.confirmPassword
    if (isApiCepError) {
      setError('postalCode', { type: 'errorApiCep', message: 'CEP inválido' })
      return
    }
    try {
      const response = await api.post('/students', data)
      router.push('/')
      console.log(response)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        {
          error.response?.status === 409 &&
            toast.error('Usuário cadastrado', {
              autoClose: 2000,
              bodyStyle: {
                fontSize: 14,
              },
            })
        }
      } else {
        console.error(error)
      }
    }
  }

  const checkByCEP = (e: FocusEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, '')
    if (cep.length !== 8) {
      return
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        if ('erro' in data) {
          setIsApiCepError(true)
          return
        }
        setIsApiCepError(false)
        setValue('street', data.logradouro)
        setValue('neighborhood', data.bairro)
        setValue('city', data.localidade)
        setValue('state', data.uf)
        setFocus('addressNumber')
      })
  }

  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>
      <Container>
        <ToastContainer />
        <h2>Cadastro de Aluno</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <h2>Dados Pessoais</h2>
            <BlockPersonalData>
              <Input
                {...register('fullName')}
                name="fullName"
                label="Nome Completo do Aluno"
                error={errors.fullName}
              />
              <Input
                {...register('nickName')}
                name="nickName"
                label="Apelido / Como você quer ser chamado?"
                autoComplete="off"
                error={errors.nickName}
              />
              <Controller
                name="cpf"
                control={control}
                render={({ field }) => (
                  <InputMask
                    label="CPF"
                    placeholder="Apenas números"
                    format="###.###.###-##"
                    mask="_"
                    error={errors.cpf}
                    {...field}
                  />
                )}
              />
              <Input
                {...register('birthday', {
                  setValueAs(value) {
                    if (!!value) {
                      return new Date(value).toISOString()
                    }
                  },
                })}
                name="birthday"
                type="date"
                style={{ maxHeight: '39px ' }}
                max="2999-12-31"
                label="Data de Nascimento"
                error={errors.birthday}
              />
            </BlockPersonalData>
          </Card>
          <Card>
            <h2>Endereço</h2>
            <BlockAddress>
              <Controller
                name="postalCode"
                control={control}
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field: { onBlur, ...rest } }) => (
                  <InputMask
                    label="CEP"
                    format="#####-###"
                    mask="_"
                    onBlur={checkByCEP}
                    error={errors.postalCode}
                    {...rest}
                  />
                )}
              />
              <Controller
                name="state"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value, ...field } }) => (
                  <Select
                    label="Estado"
                    placeholder="Selecionar..."
                    handleChange={(target) => onChange(target?.value)}
                    value={stateOptions.find((state) => {
                      return state.value === value
                    })}
                    error={errors.state}
                    {...field}
                  />
                )}
              />
              <Input
                {...register('city')}
                name="city"
                label="Cidade"
                error={errors.city}
              />
              <Input
                {...register('street')}
                name="street"
                label="Rua"
                placeholder="Ex.: Avenida Paulista"
                error={errors.street}
              />
              <Input
                {...register('neighborhood')}
                name="neighborhood"
                label="Bairro"
                error={errors.neighborhood}
              />
              <Input
                {...register('addressNumber')}
                name="addressNumber"
                type="text"
                label="Número"
                error={errors.addressNumber}
              />
              <Input
                {...register('details')}
                name="details"
                label="Complemento"
                placeholder="Casa, Apartamento, Bloco..."
                error={errors.details}
              />
            </BlockAddress>
          </Card>
          <Card>
            <h2>Contato</h2>
            <BlockContact>
              <Controller
                name="foneMobile"
                control={control}
                render={({ field }) => (
                  <InputMask
                    type="tel"
                    label="Celular"
                    format="(##) #####-####"
                    mask="_"
                    placeholder="Celular com DDD"
                    error={errors.foneMobile}
                    {...field}
                  />
                )}
              />
              <Controller
                name="foneHome"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputMask
                    type="tel"
                    label="Telefone Fixo"
                    format="(##) ####-####"
                    mask="_"
                    placeholder="Telefone com DDD"
                    error={errors.foneHome}
                    {...field}
                  />
                )}
              />
            </BlockContact>
          </Card>
          <Card>
            <h2>Login</h2>
            <BlockLogin>
              <Input
                {...register('email')}
                name="email"
                type="email"
                label="Email"
                placeholder="Email que será utilizado para login"
                error={errors.email}
              />
              <Input
                {...register('password')}
                name="password"
                type="password"
                label="Senha"
                placeholder="Utilize uma senha forte"
                error={errors.password}
              />
              <Input
                {...register('confirmPassword')}
                name="confirmPassword"
                type="password"
                label="Confirmar Senha"
                placeholder="Digite a senha novamente"
                error={errors.confirmPassword}
              />
              <Button type="submit">Cadastrar</Button>
            </BlockLogin>
          </Card>
        </form>
      </Container>
    </>
  )
}
