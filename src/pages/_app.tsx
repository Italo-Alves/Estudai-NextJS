import { Layout } from "../components/Layout/Layout";
import GlobalStyles from "../styles/GlobalStyles";
import { SignUpProvider } from "../contexts/SignUpContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <SignUpProvider>
          <Component {...pageProps} />
        </SignUpProvider>
      </Layout>
    </>
  );
}

export default MyApp;
