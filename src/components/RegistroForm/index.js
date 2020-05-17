import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';

import check from '../../resources/check.svg';

const required = value => value ? undefined : '*Requerido';
const minValue = min => value => value && value.length < min ? `*${min} caracteres` : undefined;
const minValue8 = minValue(8);
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? '*No válido' : undefined;

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <div>
        <input className="input-text" {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
)

const Form = ({ handleSubmit, isLoggedIn }) => (
    <Fragment>
    { isLoggedIn 
        ? 
            <div className="success-message">
                <img alt="check" src={check} width="150" height="150"></img>
                <h1 className="success-message-header">
                    {'Su cuenta ha sido creada con éxito'}
                </h1>
                <button className="registro-button">
                    <Link to="/app/feed">{'Clic para continuar'}</Link>
                </button>
            </div> 
        :
            <div>
            <h1>Ingresa tus datos</h1>
            <form className="registry" onSubmit={handleSubmit}>
                <Field 
                    name="name" 
                    type="text" 
                    component={renderField} 
                    label="Nombre" 
                    validate={required} 
                />
                <Field 
                    name="last_name" 
                    type="text" 
                    component={renderField} 
                    label="Apellidos" 
                    validate={required} 
                />
                <Field 
                    name="username" 
                    type="text" 
                    component={renderField} 
                    label="Username" 
                    validate={required} 
                />
                <Field 
                    name="email" 
                    type="email" 
                    component={renderField} 
                    label="Correo elecrónico" 
                    validate={[required, email]} 
                />
                <Field 
                    name="password" 
                    type="password" 
                    component={renderField} 
                    label="Contraseña" 
                    validate={[required, minValue8]} 
                />
                <button className="registro-button" type="submit">
                    {'Crear cuenta'}
                </button>
        </form>
        </div>
    }
    </Fragment>
)

const RegistroForm = reduxForm({
    form: 'registryValidation',
})(Form)

export default connect(
    state => ({
        isLoggedIn: selectors.isLoggedIn(state),
    }),
    undefined,
)(RegistroForm)