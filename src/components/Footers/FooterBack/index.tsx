import Link from "next/link";

import logoFacebook from "../../../assets/icons/facebook-logo.svg";
import logoTwitter from "../../../assets/icons/twitter-logo.svg";
import logoInstagram from "../../../assets/icons/instagram-logo.svg";
import logoYoutube from "../../../assets/icons/youtube-logo.svg";

import { Container, Row, Links } from "./styles";

const FooterBack = () => {
  return (
    <Container>
      <Row>
        <span>
          ©2021 - Estudai - Cursos e Aulas Online. Todos os direitos reservados
          CNPJ: XX.XXX.XXX/XXXX-XX
        </span>

        <span>
          <Links>
            <li>
              <Link href="#">
                <a>
                  <img src={logoFacebook} alt="Facebook" />
                </a>
              </Link>
            </li>

            <li>
              <Link href="#">
                <a>
                  <img src={logoTwitter} alt="Twitter" />
                </a>
              </Link>
            </li>

            <li>
              <Link href="#">
                <a>
                  <img src={logoInstagram} alt="Instagram" />
                </a>
              </Link>
            </li>

            <li>
              <Link href="#">
                <a>
                  <img src={logoYoutube} alt="Youtube" />
                </a>
              </Link>
            </li>
          </Links>
        </span>
      </Row>
    </Container>
  );
};

export default FooterBack;
