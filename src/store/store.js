import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk';

//con esta constante se activa redux tools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//combineReducers es necesario para poder pasar varios reducers en la creacion del store
const reducers = combineReducers({
  auth: authReducer,
});

export const store = createStore(
  reducers,
  //ya que create store solo permite dos parametros (reducer y enhacer)
  //pasamos el composeEnhacer para que a esta misma podamos pasarle el thunk
  // es thunk es para realizar cambios al state de forma async
  composeEnhancers(
    applyMiddleware(thunk)
  )
);
