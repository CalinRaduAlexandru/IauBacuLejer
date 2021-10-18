import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Onboarding from "./Pages/Onboarding/Onboarding";
import Homepage from "./Pages/Homepage/Homepage";
import Layout from "./Components/Layout/Layout";
import AuthContextProvider from './contexts/AuthContext'


import "./App.css";

function App() {
  return (
    <AuthContextProvider>

    <Layout>
    <Switch>
        <Route path="/" exact >
            <Homepage />
        </Route>
        <Route path="/Login" exact>
            <Onboarding />
        </Route>
    </Switch>
</Layout>
</AuthContextProvider>
  );
}

export default App;
