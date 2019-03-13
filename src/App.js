import React, { Component, Fragment } from 'react';

import logo from './assets/logo.png';
import {
    Form,
    Image,
    HeroList,
} from './components';

const labels = [
    'POW!',
    'PEW!',
    'BLOW!',
    'WRAK!',
    'BAMF!',
];

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonLabel: '',
            heroList: [],
        };
    }

    componentDidMount() {
        this.setState({
            buttonLabel: this.getButtonLabel(),
            heroList: [
                {
                    name: 'Iron Man',
                    image: 'http://pm1.narvii.com/6843/a7fe154c61c771b8ae5cbbd2bb7338a87a000429v2_00.jpg',
                },
                {
                    name: 'Black Phanter',
                    image: 'https://www.geek.com/wp-content/uploads/2017/12/black-panther-625x352.jpg',
                },
            ],
        });
    }

    addHero = (hero) => {
        const shouldAdd = hero && hero.image && hero.name;
        const heroList = this.state.heroList;

        if (shouldAdd) heroList.push(hero);

        this.setState({
            buttonLabel: this.getButtonLabel(),
            heroList: [ ...heroList ],
        });
    };

    getButtonLabel = () => {
        const i = Math.floor(Math.random() * (labels.length - 1));

        return labels.filter(l => l !== this.state.buttonLabel)[i];
    };

    render() {
        return (
            <Fragment>
                <Image isLogo image={ logo } name='Logo' label='Welcome to Heroes, React!' />
                <Form
                    fields={[
                        { id: 'name', label: 'Nome', type: 'text' },
                        { id: 'image', label: 'Imagem', type: 'text' },
                    ]}
                    submitLabel={ this.state.buttonLabel }
                    onSubmit={ this.addHero }
                />
                <HeroList heroList={ this.state.heroList } />
            </Fragment>
        );
    }
}

export default App;
