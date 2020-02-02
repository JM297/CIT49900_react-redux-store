import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import StatusPage from "./components/Blog/StatusPage";
import Products from "./components/Products/Products";
import ProductPage from "./components/Products/ProductPage";
import Nav from "./components/Nav/Nav";

export default function App() {
  return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path={"/"} component={Home}/>
              <Route path={"/blog/status/:id"} component={StatusPage}/>
            <Route path={"/blog"} component={Blog}/>
              <Route path={"/products/item/:id"} component={ProductPage}/>
            <Route path={"/products"} component={Products}/>
          </Switch>
        </div>
      </Router>
  );
}
