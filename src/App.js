import Navbar from "./Components/Navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Materie from './Pages/Materie';
import Joaca from './Pages/Joaca';
import Simulare from './Pages/Simulare';
import "./App.css";

function App() {
  return (
      <Router>
    <div className="App">
      <Navbar />
        <Route path='/' exact component={Homepage} />
        <Route path='/materie' component={Materie} />
        <Route path='/joaca' component={Joaca} />
        <Route path='/simulare' component={Simulare} />
    </div>
      </Router>
  );
}

export default App;
