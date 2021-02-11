import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';

export const RegisterScreen = () => {

  //dispatch de redux
  const dispatch = useDispatch();
  //con este hook accedemos al state que necesitemos de redux,
  //en este caso del reducer ui
  const { msgError } = useSelector(state => state.ui);

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
    //en cada dispatch pasamos una accion con el mensaje a setear

    if (name.trim().length === 0) {
      dispatch(setError("Name field is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("The email is not valid"));
      return false;
    } else if (password !== password2) {
      dispatch(setError("The passwords must match"));
      return false;
    } else if (!validator.isStrongPassword(password)) {
      dispatch(setError("The password must contain 8 characters, min. 1 lower and upper case letter, min. 1 number and min. 1 symbol"));
      return false;
    }

    dispatch(removeError());
    return true;
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}>

        {
          msgError &&
          (
            <div className="auth__alert-error">
              {msgError}
            </div>
          )
        }


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
