import { ListItem } from './ListItem';

import { 
  FacebookLogo, 
  InstagramLogo, 
  TwitterLogo, 
  YoutubeLogo 
} from 'phosphor-react';

import { 
  TopFooter, 
  Content,
  Column, 
  Title, 
  ListMenu, 
  Links, 
  BackFooter, 
} from './styles'


export function Footer() {
  return (
    <footer>
      <TopFooter>
        <Content>
          <Column>
            <div>
              <Title>Institucional</Title>
              <ListMenu>
                <ListItem href="#" text="Quem Somos" />
                <ListItem href="#" text="Segurança" />
                <ListItem href="#" text="Termos de Uso" />
                <ListItem href="#" text="Política de Privacidade" />
              </ListMenu>
            </div>
            <div>
              <Title>Suporte</Title>
              <ListMenu>
                <ListItem href="#" text="Pacotes" />
                <ListItem href="#" text="Perguntas Frequentes" />
              </ListMenu>
            </div>
            <div>
              <Title>Fale Conosco</Title>
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
          </Column>
        </Content>
      </TopFooter>
      <BackFooter>
        <span>
          ©2022 - Estudai - Cursos e Aulas Online. Todos os direitos reservados.
          CNPJ: XX.XXX.XXX/XXXX-XX
        </span>
        <span>
          <Links>
            <ListItem href="#" hasImage={true}>
              <FacebookLogo size={24} weight="fill" />
            </ListItem>
            <ListItem href="#" hasImage={true}>
              <InstagramLogo size={24} weight="fill" />
            </ListItem>
            <ListItem href="#" hasImage={true}>
              <TwitterLogo size={24} weight="fill" />
            </ListItem>
            <ListItem href="#" hasImage={true}>
              <YoutubeLogo size={24} weight="fill" />
            </ListItem>
          </Links>
        </span>
      </BackFooter>
    </footer>
  );
}
