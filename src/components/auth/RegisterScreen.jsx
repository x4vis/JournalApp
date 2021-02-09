import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form>
        <input type="text"
               className="auth__input"
               autoComplete="off"
               placeholder="Name"
               name="name" />

        <input type="text"
               className="auth__input"
               autoComplete="off"
               placeholder="Email"
               name="email" />

        <input type="password"
               className="auth__input"
               placeholder="Password"
               name="password" />

        <input type="password"
               className="auth__input"
               placeholder="Confirm password"
               name="password2" />

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
