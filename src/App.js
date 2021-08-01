import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Resetcss from "./Resetcss";

function App() {
  return (
    <Router>
      <Resetcss />
      <Navbar />
      <Switch>
        <Route path="/" exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
