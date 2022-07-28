import { Header } from '../Header'
// import ButtonTop from '../ButtonTop'

import { Main } from './styles'
import { Footer } from '../Footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Main>
      <Header />
      {children}
      <Footer />
    </Main>
  )
}
