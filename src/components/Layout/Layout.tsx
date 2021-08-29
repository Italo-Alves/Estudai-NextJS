import Header from '../Header'
import FooterTop from '../Footers/FooterTop'
import FooterBack from '../Footers/FooterBack'
import ButtonTop from '../ButtonTop'

import { WrapperHeader } from './styles'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <WrapperHeader />
      {children}
      <ButtonTop />
      <footer>
        <FooterTop />
        <FooterBack />
      </footer>
    </>
  )
}
