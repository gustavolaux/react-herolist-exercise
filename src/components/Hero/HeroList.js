import React, { PureComponent } from 'react';

import './styles.css';
import { HeroCard } from './HeroCard';

export class HeroList extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            heroList: [],
        };
    }

    render() {
        return (
            <div className='herolist'>
                <span className='herolistTitle'>{ this.props.heroList.length > 0 ? 'Heroes' : 'No heroes today' }</span>

                { this.props.heroList.map((hero, i) => {
                    return <HeroCard
                        key={ i }
                        image={ hero.image } 
                        name={ hero.name } 
                        label={ hero.name }
                    />;
                }) }
            </div>
        );
    }
};
