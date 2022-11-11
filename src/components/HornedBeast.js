import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../HornedBeasts.css';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favs: 0
        };
    }

    handleFav = () => {
        
        this.props.handleOpenModal()
    }

    handleLikes =() => {
        this.setState({
            favs: this.state.favs + 1
        })
    }

    render() {
        return (
            <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {this.props.image_url} onClick={this.handleFav}/>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.props.description}
        </Card.Text>
        <div onClick={this.handleLikes}>💙</div> {this.state.favs}
      </Card.Body>
    </Card>
                {/* <>
                    <h2>{this.props.title}</h2>
                    💙
                    <p>{this.state.favs}</p>
                    <img src={this.props.image_url} alt='' title='' onClick={this.handleFav} />
                    <p>{this.props.description}</p>
                </> */}
            </Col>
        );
    }

}
export default HornedBeast;