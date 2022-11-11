import React from 'react';
import Form from 'react-bootstrap/Form';
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


  handleFilterSelect = (e) => {
    let hornNum = e.target.value;
    console.log(hornNum);
    let newData;
    hornNum === 'All' ? newData = data : newData = data.filter(obj => obj.horns === parseInt(hornNum));
    this.setState({
      beastData: newData
    });
  };
  
  filterDropDown = () => {
    let uniqueHorns= data.map(item => item.horns).filter((v,i,a) => a.indexOf(v) === i).sort((a,b) => a - b);
    return uniqueHorns.map((horn, idx) => {
      return <option value={horn} key={idx}>{horn}</option>
    });
  };




  render() {
    return (
      <>
        <Header />
        <Form id='form'>
          <Form.Label># OF HORNS</Form.Label>
          <Form.Select onChange={this.handleFilterSelect}>
            <option>All</option>
            {this.filterDropDown()}
          </Form.Select>
        </Form>
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