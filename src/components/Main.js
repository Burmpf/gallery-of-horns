import React from 'react'
import HornedBeast from './HornedBeast'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
    render() {
    
        let beastArray = this.props.beastData.map((beast, idx) =>
        (
            <HornedBeast
                handleOpenModal={()=>this.props.handleOpenModal(beast)}
                title={beast.title}
                image_url={beast.image_url}
                description={beast.description}
                key={idx}
            />
        )
        )
        
        return(
            <>
            <main>
    <Container>
        <Row>
            {beastArray}
        </Row>
    </Container>
            </main >
            </>
        )
    }
};


export default Main;
