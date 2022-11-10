import React from 'react';
import data from './data.json';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import SelectedBeast from './components/SelectedBeast.js'
import '../src/App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastData: data,
      isModalShown: false,
      selectedBeast: null,
    };
  };

  handleCloseModal = () => {
    this.setState({
      isModalShown: false
    });
  };

  handleOpenModal = (beast) => {
    this.setState({
      isModalShown: true,
      selectedBeast: beast
    });
  }
    render() {
      return (
        <>
          <Header />
          <Main
            beastData={this.state.beastData}
            handleOpenModal={this.handleOpenModal}
          />
          {this.state.selectedBeast &&
            <SelectedBeast
              show={this.state.isModalShown}
              onHide={this.handleCloseModal}
              selectedBeast={this.state.selectedBeast}
            />
          }
          <Footer />
        </>
      );
    }
  };


export default App;