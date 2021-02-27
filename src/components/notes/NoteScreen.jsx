import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

  const { active: note } = useSelector(state => state.notes);
  const [ formValues, handleInputChange, reset ] = useForm(note);
  const { body, title } = formValues;
  const dispatch = useDispatch();

  //guarda la referencia de note.id pero si cambia note.id
  //la referencia no lo hace
  const activeId = useRef(note.id);

  useEffect(() => {
    //evalua con ayuda de la referencia para resetear el formulario
    //para que se muestren los cambios de note en el form
    if (activeId.current != note.id) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset])

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch])

  const handleDelete = () => {
    dispatch(startDeleting(activeId.current));
  }

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <form>
          <div>
            <input type="text"
                  placeholder="Some awesome title"
                  className="notes__title-input"
                  autoComplete="off"
                  value={title}
                  onChange={handleInputChange}
                  name='title' />

            <textarea placeholder="What happened today"
                      className="notes__textarea"
                      value={body}
                      onChange={handleInputChange}
                      name='body' >
            </textarea>
          </div>
          
          <div className="notes__image">
            {
              note.url &&
              <img src={note.url} 
                   alt="image journal"/>
            }
            {
              !note.url &&
              <i className="far fa-image fa-5x ms-1"></i>
            } 
          </div>


        </form>
      </div>

      <button className="btn-danger"
              onClick={handleDelete}>
        Delete
      </button>

    </div>
  )
}
