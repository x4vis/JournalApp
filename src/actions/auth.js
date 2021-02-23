import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types";
import { finishLoading, startloading } from './ui';

//action que se ejecuta cuando es un login sin alguna red social o cuenta
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    //cambia el state de loading a true
    dispatch(startloading());
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      //se setea el estado para el login y se cambia el estado
      //de loading a false
      dispatch(login(user.uid, user.displayName));
      dispatch(finishLoading());
    })
    .catch( err => {
      console.log(err);
      //se cambia el estado de loading a false
      dispatch(finishLoading());
    });
  }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( async ({ user }) => {
      //actualizacion de perfil para hacer set del displayName con el name de
      //del usuario que se esta registrando, de otra forma devuelve vacio este campo
      await user.updateProfile({ displayName: name });
      //se hace el dispatch del login despues del registro para redux
      dispatch(login(user.uid, user.displayName))
    })
    .catch(error => console.log(error))
  }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
    .then(({ user }) => {
      dispatch(login(user.uid, user.displayName))
    });
  }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
      uid,
      displayName
    }
});