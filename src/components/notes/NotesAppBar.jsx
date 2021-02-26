import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {

  const dispatch = useDispatch();
  const { active: note } = useSelector(state => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(note));
  }

  return (
    <div className="notes__appbar">
      <span>Agosto 28, 2020</span>

      <div>
        <button>
          Picture
        </button>
        
        <button onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  )
}
