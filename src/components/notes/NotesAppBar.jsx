import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

  const dispatch = useDispatch();
  const inputFileRef = useRef(null);
  const { active: note } = useSelector(state => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(note));
  }

  const handlePictureUpload = () => {
    inputFileRef.current.click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  }

  return (
    <div className="notes__appbar">
      <span>Agosto 28, 2020</span>

      <input type="file" 
             name="file" 
             ref={inputFileRef}
             style={{ display: 'none' }}
             onChange={handleFileChange}/>

      <div>
        <button onClick={handlePictureUpload}>
          Picture Upload
        </button>
        
        <button onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  )
}
