
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import{
 ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
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
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Outlet /> {/* This will render the matched route components */}
        </main>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;






