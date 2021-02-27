import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types";
import { finishLoading, startloading } from './ui';
import Swal from 'sweetalert2';

//action que se ejecuta cuando es un login sin alguna red social o cuenta
export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    //cambia el state de loading a true
    dispatch(startloading());

    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);
      //se setea el estado para el login y se cambia el estado
      //de loading a false
      dispatch(login(user.uid, user.displayName));
      dispatch(finishLoading());
    } catch (err) {
      Swal.fire('Error', err.message, 'error');
      //se cambia el estado de loading a false
      dispatch(finishLoading());
    }
  }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return async (dispatch) => {
    try {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
      //actualizacion de perfil para hacer set del displayName con el name de
      //del usuario que se esta registrando, de otra forma devuelve vacio este campo
      await user.updateProfile({ displayName: name });
      //se hace el dispatch del login despues del registro para redux
      dispatch(login(user.uid, user.displayName))
    } catch (err) {
      Swal.fire('Error', err.message, 'error');
    }
  }
}

export const startGoogleLogin = () => {
  return async (dispatch) => {
    const user = await firebase.auth().signInWithPopup(googleAuthProvider);
    dispatch(login(user.uid, user.displayName));
  }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
      uid,
      displayName
    }
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch({ type: types.logout });
    dispatch({ type: types.notesLogoutCleaning });
  }
}