import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import data from './data.json';
import '../src/App.css';
class App extends React.Component {
render(){
  return (
  <>
  <Header/>
    <Main/>
    <Footer/>
    </>
      );
}
}

export default App;