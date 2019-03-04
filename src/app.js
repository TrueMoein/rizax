import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './theme/Layout';

import Main from './pages/Main';
import About from './pages/About';
import Contribution from './pages/Contribution';

export default function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/contribution" component={Contribution} />
      </Layout>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
