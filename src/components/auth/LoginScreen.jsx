import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

  //redux dispatch
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: 'javislop@gmail.com',
    password: '1234',
  });

  const {email, password} = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    //recibe una funcion, que en este caso es el login action
    dispatch(login(email, password));
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
                className="btn-primary fullWidth">
          Login
        </button>
        
        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div className="google-btn">
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
