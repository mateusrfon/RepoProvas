import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resetcss from "./Resetcss";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UploadExam from "./components/UploadExam";
import Subjects from "./components/Subjects";
import ExamsBySubject from "./components/ExamsBySubject";
import Professors from "./components/Professors";
import ExamsByProfessor from "./components/ExamsByProfessor";

function App() {
  return (
    <Router>
      <Resetcss />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/upload" exact component={UploadExam} />
        <Route path="/disciplinas" exact component={Subjects} />
        <Route path="/disciplina/:id" exact component={ExamsBySubject} />
        <Route path="/professores" exact component={Professors} />
        <Route path="/professor/:id" exact component={ExamsByProfessor} />
      </Switch>
    </Router>
  );
}

export default App;
