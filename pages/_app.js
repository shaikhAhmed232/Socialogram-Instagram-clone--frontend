import "../styles/globals.css";

import Layout from "../components/Layout";
import AuthContextProvider from "../context/AuthContext";
import UserListContextProvider from "../context/userContexts/UserListContext";

function MyApp({ Component, pageProps }) {
  // console.log("my app running");
  return (
    <AuthContextProvider>
      <Layout>
        <UserListContextProvider>
          <Component {...pageProps} />
        </UserListContextProvider>
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
