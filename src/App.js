import React from 'react';
import {useSelector} from "react-redux";

import {Redirect, Route, Switch} from "react-router-dom";
import Chat from "./containers/Chat/Chat";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Layout from "./components/UI/Layout/Layout";

const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
  return isAllowed ?
    <Route {...props}/> : <Redirect to={redirectTo}/>;
};


const App = () => {
  const user = useSelector(state => state.users.user);

  return (
    <Layout>
      <Switch>
        <ProtectedRoute
          isAllowed={user}
          redirectTo='/login'
          path="/"
          exact
          component={Chat}
        />
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </Layout>

  );
};

export default App;