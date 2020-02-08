import React, { Component } from 'react';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Images from './components/Images/Images';
import Navbar from './components/Navbar/Navbar';
// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Container>
        <Images/>
        </Container>
        <Footer/>
      
    </div>
  );
}

export default App;
