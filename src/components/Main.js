import React from 'react'
import HornedBeast from './HornedBeast'
import data from '../data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component{
    render(){
        let beastArray =[];
        data.forEach((beast,idx) =>{
            beastArray.push(
            <HornedBeast
                title= {beast.title}
                image_url= {beast.image_url}
                description={beast.description}
                key = {idx}
                />
            )
        });

        return(
            <main>
                <Container>
                <Row>
           {beastArray}
           </Row>
           </Container>
            </main>
        );
    }
}
export default Main;
