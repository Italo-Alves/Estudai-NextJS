import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import GlobalStyles from '../styles/GlobalStyles'
import 'react-toastify/dist/ReactToastify.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
