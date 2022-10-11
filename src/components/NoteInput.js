import React from 'react';
import NoteInput from '../providers/InputProvider';
import NotesList from './providers/InputProvider';

const NoteContext = React.createContext();

const NotesInput = () => {

    const [note, setNote] = React.useState('Enter note here: ');

    function AddNote(note){
        setState(note.target.value)
        
    }
    
    function clickHandler(){
        
    }

    return(
        <div>
            <input className="input" onChange={AddNote}/>
            <p>Your Note: {note}</p>
            <button onClick={clickHandler}>Save Note</button>
        </div>
    );
}

export const useNoteContext = () => React.useContext(NoteContext)
export default NoteInput;