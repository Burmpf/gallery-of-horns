import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../SelectedBeast.css';

class SelectedBeast extends React.Component {
    render() {
      return (
        <>
          <Modal
            show={this.props.show}
            onHide={this.props.onHide}
          >
            <Modal.Header closeButton>
              <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
            </Modal.Header>
  
            <Modal.Body>
              <img 
                className='animalMainImg'
                src={this.props.selectedBeast.image_url} 
                title={this.props.selectedBeast.title} 
                alt={this.props.selectedBeast.description}
                >
              </img>
              <p>{this.props.selectedBeast.description}</p>
            </Modal.Body>
  
            <Modal.Footer>
              <Button variant="success" onClick={this.props.handleCloseModal}>close</Button>
            </Modal.Footer>
          </Modal>
        </>
      )
    }
  
  };
  
  export default SelectedBeast;