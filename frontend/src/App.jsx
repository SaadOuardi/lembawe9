import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from '../src/components/common/Header/Header';
import { Footer } from '../src/components/common/Footer/Footer';
import Home from "./pages/Home/Home";
import ProducutList from  './pages/Shop/ProductList/ProductList';

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={ProducutList} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
