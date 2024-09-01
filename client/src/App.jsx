import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
// Uncomment this if using AuthContext
 import { AuthProvider } from './utils/AuthContext';

// Set up the Apollo Client
const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql", // Adjust the URI to your server's URL
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
       <AuthProvider> 
        <div className="app-container">
          <Header />
          <main className="main-content">
            <Outlet /> {/* This will render the matched route components */}
          </main>
          <Footer />
        </div>
       </AuthProvider> 
    </ApolloProvider>
  );
}

export default App;
