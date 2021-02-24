import { DB } from "../firebase/firebase-config";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const doc = await DB.collection(`${uid}/journal/notes`).add(newNote);
  }
}