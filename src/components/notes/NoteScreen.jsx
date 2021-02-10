import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <form>
          <input type="text"
                 placeholder="Some awesome title"
                 className="notes__title-input"
                 autoComplete="off"/>

          <textarea placeholder="What happened today"
                    className="notes__textarea">
          </textarea>

          <div className="notes__image">
            <img src="https://imagenesdepaisajes.net/wp-content/uploads/2016/07/imagenes-de-fondo-naturales-1-816x471.jpg" 
                 alt="image journal"/>
          </div>
        </form>
      </div>
    </div>
  )
}
