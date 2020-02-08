import React, { Component } from 'react';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Container>
        <Header/>
        <Footer/>
      </Container>
    </div>
  );
}

export default App;
