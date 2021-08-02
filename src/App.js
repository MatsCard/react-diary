import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css'
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/notFound404" component={NotFound} />
          <Redirect from="*" to="notFound404"></Redirect>
        </Switch>
        
      </Layout>
    </BrowserRouter>
  );
}

export default App;
