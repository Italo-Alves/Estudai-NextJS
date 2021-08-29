import { useRouter } from "next/router";
import { useContext, useRef } from "react";

import { SubmitHandler, FormHandles, Scope } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

import api from "../../services/api";

import { stateOptions } from "./stateSelect";

import ASyncSelect from "./Select";
import FileInput from "./FileInput";

import { SignUpContext } from "../../contexts/SignUpContext";

import {
  Container,
  Input,
  InputMask,
  ContentForm,
  Block,
  Row,
  FormGroup,
  ContentButton,
} from "./styles";

interface FormData {
  personalData: {
    name: string;
    surname: string;
    cpf: string | number;
    birthday: Date;
  };

  address: {
    zip: number;
    state: string;
    city: string;
    fullAddress: string;
    neighborhood: string;
    details: string;
  };

  phone: {
    foneMobile: string | number;
    foneHome: string | number;
    foneCompany: string | number;
  };

  login: {
    email: string;
    password: string;
    confirmPassword: string;
  };
}

interface StringArray {
  [key: string]: string;
}

const FormSignUp = () => {
  const formRef = useRef<FormHandles>(null);
  const { isTeacher } = useContext(SignUpContext);

  const router = useRouter();

  const handleSubmit: SubmitHandler<FormData> = async (data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        personalData: Yup.object().shape({
          fullName: Yup.string()
            .min(4, "Digite seu nome completo")
            .max(60, "O nome deve ter no máximo 100 dígitos")
            .notOneOf(["admin", "administrador"], "Esse nome não é permitido")
            .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/, "Apenas letras")
            .required("Nome é obrigatório"),
          nickname: Yup.string()
            .max(20, "O nome deve ter no máximo 20 dígitos")
            .notOneOf(["admin", "administrador"], "Esse nome não é permitido")
            .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/, "Apenas letras")
            .optional(),
          cpf: Yup.string().required("CPF é obrigatório"),
          birthday: Yup.date()
            .typeError("Data de Nascimento é obrigatório")
            .required("Data de Nascimento é obrigatório")
            .test("age", "Deve ser maior de 18 anos", (birthday) => {
              const cutoff = new Date();
              cutoff.setFullYear(cutoff.getFullYear() - 18);
              return birthday! <= cutoff;
            }),
          // universityDegree: Yup.mixed()
          //   .test("fileSize", "Arquivo muito grande", (value) => {
          //     console.log(value);
          //     return value && value.size <= 2000000;
          //   })
          //   .test("fileType", "Somente JPG, PNG ou PDF", (value) => {
          //     return (
          //       value &&
          //       ["image/jpeg", "image/png", "application/pdf"].includes(
          //         value.type
          //       )
          //     );
          //   })
          //   .required("Arquivo obrigatório"),
        }),

        address: Yup.object().shape({
          zip: Yup.string().required("CEP é obrigatório"),
          state: Yup.string().required("Estado é obrigatório"),
          city: Yup.string()
            .max(40, "A cidade deve ter no máximo 40 dígitos")
            .required("Cidade é obrigatório"),
          fullAddress: Yup.string()
            .max(100, "O endereço deve ter no máximo 100 dígitos")
            .required("Rua é obrigatório"),
          neighborhood: Yup.string()
            .max(40, "O bairro deve ter no máximo 40 dígitos")
            .required("Bairro é obrigatório"),
          details: Yup.string()
            .max(20, "O complemento deve ter 20 dígitos")
            .optional(),
        }),

        phone: Yup.object().shape({
          foneMobile: Yup.string().required("Celular é obrigatório"),
          foneHome: Yup.string().optional(),
          foneCompany: Yup.string().optional(),
        }),

        login: Yup.object().shape({
          email: Yup.string()
            .max(50, "O e-mail deve ter no máximo 50 dígitos")
            .email("Insira um e-mail válido")
            .required("E-mail é obrigatório"),
          password: Yup.string()
            .min(6, "A senha deve ter pelo menos 6 caracteres")
            .required("Insira a senha"),
          passwordConfirm: Yup.string().oneOf(
            [Yup.ref("password")],
            "Senhas não conferem"
          ),
        }),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
      formRef.current?.setErrors({});
      try {
        const response = await api.post("/students", data);
        console.log(response);
        router.push("login");
        reset();
        //loginSuccess("Login feito com sucesso");
        console.log("Cadastro feito com sucesso");
      } catch (error) {
        console.log(error);
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err);
        const errorMessages: StringArray = {};

        err.inner.forEach((error) => {
          errorMessages[error.path!] = error.message;
        });
        formRef.current?.setErrors(errorMessages);
      }
    }
  };

  const filterStates = (inputValue: string) => {
    return stateOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (
    inputValue: string,
    callback: (arg0: { value: string; label: string }[]) => void
  ) => {
    setTimeout(() => {
      callback(filterStates(inputValue));
    }, 1000);
  };

  const onFocusNumber = () => {
    const numberFocus = document.getElementById("number");
    numberFocus.focus();
  };

  const onBlurCep = () => {
    const cep = formRef.current?.getFieldValue("address.zip");
    const formattedCep = cep.replace(/[^0-9]/g, "");

    if (formattedCep.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${formattedCep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        formRef.current.setErrors({});
        if ("erro" in data) {
          formRef.current.setFieldError("address.zip", "Cep incorreto");
          return;
        }
        let refState = formRef.current?.getFieldRef("address.state");
        refState.select.state.value = {
          value: "...",
          label: "...",
        };
        formRef.current.setFieldValue("address.city", "...");
        formRef.current.setFieldValue("address.fullAddress", "...");
        formRef.current.setFieldValue("address.neighborhood", "...");
        setTimeout(() => {
          refState.select.state.value = {
            value: data.uf,
            label: stateOptions.map((state) => {
              if (state.value === data.uf) {
                return state.label;
              } else {
                return "";
              }
            }),
          };
          formRef.current?.setFieldValue("address.state", data.uf);
          formRef.current?.setFieldValue("address.city", data.localidade);
          formRef.current?.setFieldValue(
            "address.fullAddress",
            data.logradouro
          );
          formRef.current?.setFieldValue("address.neighborhood", data.bairro);
          formRef.current?.setFieldValue("address.details", data.complemento);
          onFocusNumber();
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <ContentForm>
            <Block>
              <h1>Dados Pessoais</h1>
              <Scope path="personalData">
                <Row>
                  <FormGroup className="col6 required">
                    <Input
                      name="fullName"
                      label="Nome completo do aluno"
                      autoComplete="off"
                    />
                  </FormGroup>

                  <FormGroup className="col6">
                    <Input
                      name="nickname"
                      label="Apelido / Como você quer ser chamado?"
                      autoComplete="off"
                    />
                  </FormGroup>

                  <FormGroup className="col6 required">
                    <InputMask
                      name="cpf"
                      mask="999.999.999-99"
                      label="CPF"
                      placeholder="Apenas números"
                    />
                  </FormGroup>

                  <FormGroup className="col6 required">
                    <Input
                      name="birthday"
                      type="date"
                      label="Data de Nascimento"
                    />
                  </FormGroup>

                  {isTeacher && (
                    <FormGroup className="col3 required">
                      <FileInput
                        name="universityDegree"
                        label="Diploma"
                      ></FileInput>
                    </FormGroup>
                  )}
                </Row>
              </Scope>
            </Block>

            <Block>
              <h1>Endereço</h1>
              <Scope path="address">
                <Row>
                  <FormGroup className="col2 required">
                    <InputMask
                      name="zip"
                      mask="99999-999"
                      label="CEP"
                      onBlur={onBlurCep}
                    />
                  </FormGroup>

                  <FormGroup className="col4 required">
                    <ASyncSelect
                      name="state"
                      loadOptions={loadOptions}
                      defaultOptions={stateOptions}
                      loadingMessage={() => "Carregando"}
                      noOptionsMessage={() => "Sem opções"}
                      placeholder="Selecionar"
                      className="select"
                      label="Estado"
                      escapeClearsValue={false}
                      hideSelectedOptions={false}
                    />
                  </FormGroup>

                  <FormGroup className="col6 required">
                    <Input name="city" label="Cidade" />
                  </FormGroup>
                </Row>

                <Row>
                  <FormGroup className="col6 required">
                    <Input
                      name="fullAddress"
                      label="Rua"
                      placeholder="Ex.: Avenida Paulista, 123"
                    />
                  </FormGroup>

                  <FormGroup className="col2 required">
                    <Input name="neighborhood" label="Bairro" />
                  </FormGroup>

                  <FormGroup className="col1 required">
                    <Input name="number" id="number" label="Número" />
                  </FormGroup>

                  <FormGroup className="col3">
                    <Input
                      name="details"
                      label="Complemento"
                      placeholder="Casa, Apartamento, Bloco..."
                    />
                  </FormGroup>
                </Row>
              </Scope>
            </Block>

            <Block>
              <h1>Telefone</h1>
              <Scope path="phone">
                <Row>
                  <FormGroup className="col4 required">
                    <InputMask
                      type="text"
                      name="foneMobile"
                      label="Celular"
                      mask="(99) 99999-9999"
                      placeholder="Celular com DDD"
                    />
                  </FormGroup>

                  <FormGroup className="col4">
                    <InputMask
                      type="text"
                      name="foneHome"
                      label="Residencial"
                      mask="(99) 9999-9999"
                      placeholder="Telefone com DDD"
                    />
                  </FormGroup>

                  <FormGroup className="col4">
                    <InputMask
                      type="text"
                      name="foneCompany"
                      label="Comercial"
                      mask="(99) 99999-9999"
                      placeholder="Telefone com DDD"
                    />
                  </FormGroup>
                </Row>
              </Scope>
            </Block>

            <Block>
              <h1>Login</h1>
              <Scope path="login">
                <Row>
                  <FormGroup className="col6 required">
                    <Input
                      type="email"
                      name="email"
                      label="Email"
                      placeholder="Email que será utilizado para login"
                    />
                  </FormGroup>

                  <FormGroup className="col3 required">
                    <Input
                      type="password"
                      label="Senha"
                      name="password"
                      placeholder="Utilize uma senha forte"
                    />
                  </FormGroup>

                  <FormGroup className="col3 required">
                    <Input
                      type="password"
                      label="Confirma Senha"
                      name="passwordConfirm"
                      placeholder="Digite a senha novamente"
                    />
                  </FormGroup>
                </Row>
              </Scope>
            </Block>
          </ContentForm>

          <ContentButton>
            <div>
              <small>
                Campos <span>*</span> obrigatórios
              </small>
            </div>
            <div>
              <button type="submit">Cadastrar</button>
            </div>
          </ContentButton>
        </Form>
      </Container>
    </>
  );
};

export default FormSignUp;
