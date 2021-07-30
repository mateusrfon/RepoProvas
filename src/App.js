import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        On Business Baby
      </div>
      <Switch>
        <Route path="/" exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
