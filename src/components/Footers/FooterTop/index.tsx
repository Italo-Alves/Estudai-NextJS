import Link from 'next/link'

import {
  Container,
  Content,
  Row,
  Column,
  Title,
  ListMenu,
  EmailSpan,
} from './styles'

const FooterTop = () => {
  return (
    <Container>
      <Content>
        <Row>
          <Column>
            <Title>Institucional</Title>
            <div>
              <ListMenu>
                <li>
                  <Link href="#">
                    <a>Quem Somos</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Segurança</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Termos de Uso</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Política de Privacidade</a>
                  </Link>
                </li>
              </ListMenu>
            </div>
          </Column>
          <Column>
            <Title>Suporte</Title>
            <div>
              <ListMenu id="menu-institucional" className="menu">
                <li id="menuItemPacotes" className="list-unstyled">
                  <Link href="#">
                    <a>Pacotes</a>
                  </Link>
                </li>
                <li id="menuItemPerguntasFrequentes" className="list-unstyled">
                  <Link href="#">
                    <a>Perguntas Frequentes</a>
                  </Link>
                </li>
              </ListMenu>
            </div>
          </Column>
          <Column>
            <Title>Fale Conosco</Title>
            <div itemProp="address">
              <p style={{ fontSize: '14px' }}>
                <span itemProp="streetAddress">Rua Virgínia Ferni, 400</span>
                <br />
                <span>Itaquera - </span>
                <span itemProp="addressLocality">São Paulo </span>
                <span>-</span>
                <span itemProp="addressRegion"> SP</span>
                <br />
                <span>CEP </span>
                <span itemProp="postalCode">08253-000</span>
              </p>
            </div>
            <p></p>
            <Title>Email</Title>
            <EmailSpan>
              <Link href="#">
                <a>exemplo123@hotmail.com</a>
              </Link>
            </EmailSpan>
          </Column>
        </Row>
      </Content>
    </Container>
  )
}

export default FooterTop
