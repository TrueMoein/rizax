import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './assets/css/styles.css';

import Layout from './theme/Layout';

import Main from './pages/Main';
import About from './pages/About';
import Contribution from './pages/Contribution';
import NotFound from './pages/404';

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/contribution" component={Contribution} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
