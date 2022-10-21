import "./../styles/App.css";
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink,from} from '@apollo/client';
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./Header";
import Login from "./Auth/Login";
import {onError} from '@apollo/client/link/error'
import GetProducts from "./VivunApp/GetProducts";
import InsertProduct from "./VivunApp/InsertProduct";
import useAccessToken from "../hooks/useAccessToken";
import DeleteProduct from "./VivunApp/DeleteProduct";
import UpdateProduct from "./VivunApp/UpdateProduct";

const errorLink = onError(({graphqlErrors, networkError}) => {
  if(graphqlErrors){
    graphqlErrors.map(({message,location,path})=> {
      alert(`Graphql error ${message}`);
    });
  }
});

const linkHeaders = {
  'x-hasura-admin-secret': "2oqntdBdkc73ZhGyPZjuLxXY0QvDd2bMiQGQD0cmDZj261jb1pQWBnSEqNdvqFk6"
};

const link = from([
  errorLink,
  new HttpLink({uri: "https://vivunapp.hasura.app/v1/graphql", headers: linkHeaders}),
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App(){
  const idToken = useAccessToken();
  const { user, loading, logout } = useAuth0();
  const logoutProps = {_logout: logout, _user: user};
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!idToken) {
    return <Login />;
  }
  return (<ApolloProvider client={client}>
     <Header logoutHandler={logoutProps} />
     <div>
      <div>
        Products
      </div>
      <div className="row container-fluid p-left-right-0 m-left-right-0">
          <div className="row col-md-12 p-left-right-0 m-left-right-0">
            <div className="col-md-3 sliderMenu p-30">
              <GetProducts />
            </div>
            <div className="col-md-3 sliderMenu p-30 bg-gray border-right">
              <InsertProduct />
            </div>
            <div className="col-md-3 sliderMenu p-30 bg-gray border-right">
              <DeleteProduct />
            </div>
            <div className="col-md-3 sliderMenu p-30 bg-gray border-right">
              <UpdateProduct />
            </div>
          </div>
        </div>
     </div>
      
    </ApolloProvider>
    );
}

export default App;