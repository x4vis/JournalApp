import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { setError, removeError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

export const LoginScreen = () => {

  //redux dispatch
  const dispatch = useDispatch();
  //obtenemos el valor de loading del state de redux
  const { loading } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: 'javislop@hotmail.com',
    password: 'Javislop.18',
  });

  const {email, password} = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    //recibe una funcion, que en este caso es el login action
    isFormValid() && dispatch(startLoginEmailPassword(email, password));
  }
  
  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  const isFormValid = () => {
    //en cada dispatch pasamos una accion con el mensaje a setear
    if (email.trim().length === 0 || password.trim().length === 0) {
      dispatch(setError("All fields are required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("The email is not valid"));
      return false;
    }

    dispatch(removeError());
    return true;
  }

  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={handleLogin}>
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

        <button type="submit"
                className="btn-primary fullWidth"
                disabled={ loading }>
          Login
        </button>
        
        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div className="google-btn"
               onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
                <img className="google-icon" 
                     src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                     alt="google button" />
            </div>
            <p className="btn-text">
                <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register"
              className="link">
          Create new account
        </Link>
      </form> 
    </>
  )
}
