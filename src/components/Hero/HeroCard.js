import React, { PureComponent } from 'react';

import './styles.css';
import { Image } from '../Image/Image';

export class HeroCard extends PureComponent {

    render() {
        return (
            <div className='herocard'>
                <Image
                    image={ this.props.image } 
                    name={ this.props.name } 
                    label={ this.props.name }
                />
            </div>
        );
    }
}
