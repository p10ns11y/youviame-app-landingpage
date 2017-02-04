import React, { Component } from 'react';

import logo from './yvm2.png';

import Playstores from './components/Playstores';
// import SubscribeLink from './components/SubscribeLink';
import RequestForm from './components/RequestForm';
import Footer from './components/Footer';

import './App.css';

const SiteLogo = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
  </header>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteLogo />
        <main className="App-main-content">
          <Playstores />
          <RequestForm />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
