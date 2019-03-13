import React, { PureComponent } from 'react';

import './styles.css';

export class Image extends PureComponent {

    render() {
        return (
            <div className='container'>
                <img className='image' src={ this.props.image } alt={ this.props.name } />
                <div className={ this.props.isLogo ? 'gradientRed' : 'gradientBlack' } />
                { this.props.label && <span className='imageLabel'> { this.props.label } </span> }
            </div>
        );
    }
};
