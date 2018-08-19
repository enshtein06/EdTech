import React, {Component} from 'react';
import { Map } from 'immutable';
import { connect } from 'react-redux';

import Input from '../components/auth/Input';
import Button from '../components/auth/Button';

import * as authActions from '../actions/auth';

class Signup extends Component {
    state = {
        signupForm: Map ({
            name: {
                type: "text",
                title: "Full Name",
                value: "",
                id: "name",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                type: "email",
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
                type: "password",
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
            },
            confirmPassword: {
                type: "password",
                title: "Confirm Password",
                value: "",
                id: "confirmPassword",
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 30
                },
                valid: false,
                touched: false
            }
        }),
        formIsValid: false
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if(!rules) {
            return true;
        }
        if(rules.required) {
            isValid = false;
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    onInputChange = (e, elId) => {
        const copyOfSignupForm = this.state.signupForm;
        const copyOfSignupElement = copyOfSignupForm.get(elId);
        copyOfSignupElement.value = e.target.value;
        this.setState({signupForm: copyOfSignupForm.set(elId, copyOfSignupElement)});
        console.log(this.state.signupForm.toJS());
    }

    onButtonClick = (e) => {
        e.preventDefault();
        const email = this.state.signupForm.get('email').value;
        const password = this.state.signupForm.get('password').value;
        const name = this.state.signupForm.get('name').value;
        const confirmPassword = this.state.signupForm.get('confirmPassword').value;
        this.props.authStart(email, password, name, confirmPassword);
    }
    render() {
        const elementsArray = [];
        const signupFormToJS = this.state.signupForm.toJS();
        for(let key in signupFormToJS) {
            elementsArray.push(signupFormToJS[key]);
        }
        console.log('re-render')
        const allInputs = elementsArray.map(el => (
            <Input 
                key={el.id}
                id={el.id}
                title={el.title}
                type={el.type}
                onInputChange={(event) => this.onInputChange(event, el.id)}
                value={el.value}
                isRequired={el.validation.required}
                isValid={el.valid && el.touched}
                touched={el.touched} />
        ))
        return (
            <div className="authOverlay">
                <form onSubmit={this.onButtonClick} >
                    <span className="cancelButton" onClick={this.props.onAuthToggle}>&times;</span>
                    <h2>Create new account</h2>
                    {allInputs}
                    <Button type="submit" onClick={this.onButtonClick} title="Register" />
                </form>
            </div>
        );
    }
}

export default connect(null, authActions)(Signup);