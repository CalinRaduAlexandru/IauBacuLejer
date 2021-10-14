import { Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Materie from './Pages/Materie';
import Joaca from './Pages/Joaca';
import Simulare from './Pages/Simulare';
import Layout from "./Components/Layout/Layout";

import "./App.css";

function App() {
  return (
    <Layout>
    <Switch>
        <Route path="/" exact>
            <Homepage />
        </Route>
        <Route path="/materie">
            <Materie />
        </Route>
        <Route path="/joaca">
            <Joaca />
        </Route>
        <Route path="/simulare">
            <Simulare />
        </Route>
    </Switch>
</Layout>
  );
}

export default App;
