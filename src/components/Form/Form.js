import React, { PureComponent } from 'react';

import './styles.css';
import { Button } from '../Button/Button';

export class Form extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {};
    }

    changeFieldValue = (fieldId, ev) => {
        const newState = {
            ...this.state,
        };

        newState[fieldId] = ev.target.value;

        this.setState(newState);
    };

    clearForm = () => {
        this.setState(Object.keys(this.state).reduce((state, k) => {
            state[k] = '';

            return state;
        }, {}));
    };

    onSubmit = (ev) => {
        ev.preventDefault();

        const form = Object.keys(this.state).reduce((form, k) => {
            form[k] = this.state[k];

            return form;
        }, {});

        this.props.onSubmit(form);

        this.clearForm();
    };

    render() {
        return (
            <form className='form'>
                { this.props.fields.map((field) => {
                    return (
                        <div
                            className='fields'
                            key={ field.id } >
                            <label className='label' >
                                { field.label }
                                <input
                                    className='input'
                                    type={ field.type }
                                    value={ this.state[field.id] || '' }
                                    onChange={ (ev) => { this.changeFieldValue(field.id, ev) } }
                                />
                            </label>
                        </div>
                    );
                }) }
                <Button label={ this.props.submitLabel } onClick={ this.onSubmit } />
            </form>
        );
    }
};
