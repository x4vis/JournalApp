import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({
  isLoggedIn,
  component: Component,
  ...rest
}) => {

  //setear el ultimo path en localstorage para que cuando
  //se vuelva a hacer login se pueda regresar a la ruta
  //donde se encontraba
  localStorage.setItem('lastPath', rest.location.pathname);

  return (
    <Route {...rest}
           component={(props) => (
            isLoggedIn
            ? <Component {...props} />
            : <Redirect to="/auth/login"/>
           )} />
  )
}

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
}

export default PrivateRoute
