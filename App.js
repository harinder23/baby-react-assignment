import React, { Component } from 'react';
import './public/flexboxgrid.min.css';
import './node_modules/material-components-web/dist/material-components-web.min.css';
import Header from './src/components/header/Header';
import Cards from './src/components/Cards/Cards';
import Body from './src/components/Body/Body';


class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Body />
                <Cards />
            </div>
        );
    }

}

export default App;