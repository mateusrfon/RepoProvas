import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resetcss from "./Resetcss";

import Navbar from "./components/navbar";
import Home from "./components/Home";
import UploadExam from "./components/UploadExam";

function App() {
  return (
    <Router>
      <Resetcss />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/upload" exact component={UploadExam} />
        <Route path="/professores" exact component={Home} />
        <Route path="/professor/:id" exact component={Home} />
        <Route path="/disciplinas" exact component={Home} />
        <Route path="/disciplina/:id" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
