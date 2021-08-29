import Link from "next/link";
import Head from "next/head";

// import Carousel from "../components/SliderCarousel";
import { CoursesData } from "../components/HomeData";

import studyIcon from "../assets/icons/study.svg";
import giveClassesIcon from "../assets/icons/give-classes.svg";
import logoMoney from "../assets/icons/icon-service-01.svg";
import logoPDF from "../assets/icons/icon-service-02.svg";
import logoQuestion from "../assets/icons/icon-service-03.svg";

import {
  Container,
  Content,
  ContainerButtons,
  ContainerServices,
  Service,
  ContainerCourses,
  IconBlock,
  ContainerNewsletter,
  Newsletter,
  Row,
  Column,
  Input,
  Button,
  ContainerWhy,
  Item,
} from "../styles/Home/styles";

const PageLanding = () => {
  return (
    <>
      <Head>
        <title>Estudai</title>
      </Head>
      <Container>
        <div style={{ marginTop: "65px" }}></div>
        {/* <Carousel /> */}
        <Content>
          <ContainerButtons>
            <Link href="/study">
              <a className="study">
                <img src={studyIcon} alt="Estudar" />
                <span>Estudar</span>
              </a>
            </Link>

            <Link href="/give-classes">
              <a className="give-classes">
                <img src={giveClassesIcon} alt="Dar aulas" />
                <span>Postar aulas</span>
              </a>
            </Link>
          </ContainerButtons>
          <section>
            <ContainerServices>
              <Service>
                <strong>O Caminho mais rápido até sua aprovação</strong>
                <ContainerCourses>
                  {CoursesData.map((item, index) => {
                    return (
                      <IconBlock key={index}>
                        <img src={item.icon} alt={item.title} />
                        <p>{item.title}</p>
                      </IconBlock>
                    );
                  })}
                </ContainerCourses>
              </Service>
              <ContainerNewsletter>
                <Newsletter>
                  <div>
                    <span>Assine nosso</span>
                    <b> Newsletter </b>
                    <span>e receba</span>
                    <b> Novidades sobre Provas, Matérias </b>
                    <br />
                    <span>e</span>
                    <b> E-books.</b>
                  </div>

                  <div>
                    <form>
                      <Row>
                        <Column>
                          <div>
                            <label htmlFor="firstName">Nome</label>
                            <Input
                              maxLength={40}
                              name="firstName"
                              size={20}
                              required
                            />
                          </div>
                        </Column>
                        <Column>
                          <div>
                            <label htmlFor="email">Email</label>
                            <Input
                              maxLength={80}
                              name="email"
                              type="email"
                              required
                            />
                          </div>
                        </Column>
                        <Column>
                          <div>
                            <label htmlFor="phone">Telefone</label>
                            <Input maxLength={15} name="phone" />
                          </div>
                        </Column>
                      </Row>
                      <div>
                        <Button type="submit">
                          <b>Inscreva-se gratuitamente</b>
                        </Button>
                      </div>
                    </form>
                  </div>
                </Newsletter>
              </ContainerNewsletter>
            </ContainerServices>
          </section>

          <section>
            <ContainerWhy>
              <h2>Por que escolher o Estudai?</h2>
              <div>
                <Item>
                  <img src={logoMoney} alt="Dinheiro" />
                  <h4>Satisfação ou seu dinheiro de volta</h4>
                  <p>
                    Confiamos em nosso trabalho. Por isso, você tem 30 dias para
                    testar nossos cursos. Consulte nossos Termos de Uso.
                  </p>
                </Item>
                <Item>
                  <img src={logoPDF} alt="PDF" />
                  <h4>Download ilimitado</h4>
                  <p>
                    Não há limites de visualizações ou de downloads. Baixe as
                    videoaulas e PDFs para estudar quando e onde você estiver.
                  </p>
                </Item>
                <Item>
                  <img src={logoQuestion} alt="Dúvidas" />
                  <h4>Fórum de dúvidas</h4>
                  <p>
                    Envie perguntas pela nossa plataforma e acompanhe as dúvidas
                    dos outros alunos. Nossos professores vão auxiliá-los
                    respondendo e comePntando dúvidas.
                  </p>
                </Item>
              </div>
            </ContainerWhy>
          </section>
        </Content>
      </Container>
    </>
  );
};

export default PageLanding;
