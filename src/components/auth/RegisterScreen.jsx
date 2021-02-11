import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

export const RegisterScreen = () => {

  const [formValues, handleInputChange] = useForm({
    name: 'Javier',
    email: 'javislop@gmail.com',
    password: '1234',
    password2: '1234',
  });

  const {name, email, password, password2} = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    isFormValid() && console.log("formulario correcto");
  }

  const isFormValid = () => {
    if (name.trim().length === 0) {
      return false;
    } else if (!validator.isEmail(email)) {
      return false;
    } else if (password !== password2) {
      return false;
    } else if (!validator.isStrongPassword(password)) {
      return false;
    }

    return true;
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}>

        <div className="auth__alert-error">
          Error
        </div>

        <input type="text"
               className="auth__input"
               autoComplete="off"
               placeholder="Name"
               name="name"
               value={name}
               onChange={handleInputChange} />

        <input type="text"
               className="auth__input"
               autoComplete="off"
               placeholder="Email"
               name="email"
               value={email}
               onChange={handleInputChange} />

        <input type="password"
               className="auth__input"
               placeholder="Password"
               name="password"
               value={password}
               onChange={handleInputChange} />

        <input type="password"
               className="auth__input"
               placeholder="Confirm password"
               name="password2"
               value={password2}
               onChange={handleInputChange} />

        <button type="submit"
                className="btn-primary fullWidth mb-5 mt-1">
          Register
        </button>

        <Link to="/auth/login"
              className="link">
          Already registered ?
        </Link>
      </form> 
    </>
  )
}
