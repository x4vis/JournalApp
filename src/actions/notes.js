import Swal from "sweetalert2";
import { DB } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const doc = await DB.collection(`${uid}/journal/notes`).add(newNote);

    dispatch(activeNote(doc.id, newNote));
  }
}

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note
  }
})

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    dispatch(setNotes(await loadNotes(uid)));
  }
}

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes
})

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) {
      delete note.url
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    await DB.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
    
    dispatch(refreshNote(note.id, note));
    Swal.fire('Saved', note.title, 'success');
  } 
}

export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note
  }
})

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const {active: note} = getState().notes;

    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      }
    })

    const fileUrl = await fileUpload(file);
    
    note.url = fileUrl;
    dispatch(startSaveNote(note));
    
    Swal.close();
  }
}

export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    try {
      await DB.doc(`${uid}/journal/notes/${id}`).delete();
      dispatch(deleteNote(id));
    } catch (error) {
      console.log('error :>> ', error);
    }
  }
}

export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id
})