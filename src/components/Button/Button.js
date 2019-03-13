import React, { PureComponent } from 'react';

import './styles.css';

export class Button extends PureComponent {

    render() {
        return (
            <button className='button' onClick={ this.props.onClick }>
                { this.props.label }
            </button>
        );
    }
};
