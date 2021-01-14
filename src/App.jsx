import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login">
            <h1>This is login page</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
