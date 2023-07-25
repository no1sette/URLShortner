import { Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/Form";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/app" component={Form} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
