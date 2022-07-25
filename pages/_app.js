import "../styles/globals.css";

import Layout from "../components/Layout";
import AuthContextProvider from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  // console.log("my app running");
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
