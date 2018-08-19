import React, {Component} from 'react';
import {Map} from 'immutable';
import { connect } from 'react-redux';

import * as authActions from '../actions/auth'; 

import Input from '../components/auth/Input';
import Button from '../components/auth/Button';

class Signin extends Component {
    state = {
        signinForm: Map ({
            email: {
                type: 'email',
                title: "Email",
                value: "",
                id: "email",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                type: 'password',
                title: "Password",
                value: "",
                id: "password",
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 30
                },
                valid: false,
                touched: false
            }
        }),
        isValidForm: false
    }

    checkValidity = (value, rules) => {
        let isValid = true;

        if(!rules) {
            return true;
        }
        if(rules.required) {
            isValid = !!value;
        }
        if(rules.minLength) {
            isValid = isValid && value.length >= rules.minLength;
        }
        if(rules.maxLength) {
            isValid = isValid && value.length <= rules.maxLength;
        }

        return isValid;
    }

    onInputChange = (e, elId) => {
        let copySigninForm = this.state.signinForm;
        let copyOfElement = copySigninForm.get(elId);
        copyOfElement.value = e.target.value;
        copySigninForm.set(elId, copyOfElement);
        this.setState({signinForm: copySigninForm});
    }

    onFormHandler = (event) => {
        event.preventDefault();
        const email = this.state.signinForm.get('email').value;
        const password = this.state.signinForm.get('password').value;
        this.props.authStart(email, password)
    }

    render() {
        let arrayOfInputs = [];
        let signinForm = this.state.signinForm.toJS();
        for(let key in signinForm) {
            arrayOfInputs.push(signinForm[key]);
        }
        let InputsRender = arrayOfInputs.map(el => (
            <Input 
                key={el.id}
                id={el.id}
                title={el.title}
                type={el.type}
                value={el.value}
                isRequired={el.validation.required}
                onInputChange={(event) => this.onInputChange(event, el.id)}
                isValid={el.valid && !el.touched}
                touched={el.touched} />
        ))
        return (
            <div className="authOverlay loginForm">
                <form onSubmit={this.onFormHandler}>
                    <span className="cancelButton" onClick={this.props.onAuthToggle}>&times;</span>
                    <h2>Login in EdTech</h2>
                    {InputsRender}
                    <Button onButtonClick={this.onFormHandler} title="Login" type="submit" />
                </form>
            </div>
        );
    }
}

export default connect(null, authActions)(Signin);