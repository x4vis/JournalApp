import { types } from "../types/types";

const initialState = {
  loading: false,
  msgError: null,
}

export const uiReducer = (state = initialState, action) => {

  console.log("cuando ui reducer");

  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload
      }
    
    case types.uiRmvError:
      return {
        ...state,
        msgError: null
      }

    default:
      return state;
  }
}