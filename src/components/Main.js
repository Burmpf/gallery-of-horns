import React from 'react'
import HornedBeast from './HornedBeast'

class Main extends React.Component{
    render(){
        return(
            <main>
                <HornedBeast
                title='dog'
                imageUrl='https://i0.hippopx.com/photos/151/145/227/dog-beagle-portrait-cute-preview.jpg'
                /* taken from Hippopx.com*/
                description='a dog'
                />
                <HornedBeast
                title='cat'
                imageUrl='https://www.publicdomainpictures.net/pictures/50000/velka/cat-13710479238hd.jpg'
                /*taken from publicdomainpictures.net*/
                description='a cat'
                />
            </main>
        );
    }
}
export default Main
