import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Details from "./component/Details";
import Card from "./component/Card/Card";
import Default from "./component/Default";
import Modal from "./component/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/card" component={Card} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
