import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          {/* This last route is the default route which is gonna be used when 
          All the others fail */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
