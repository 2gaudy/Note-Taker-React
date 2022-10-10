import { useNotesContext } from "../providers/NotesProvider";

const NotesList = () => {
    const { notes } = useNotesContext();

    return(
        <div>
            <h1>Notes App</h1>
            {notes.map((note, index) => (
                <h2 key={index}>{note}</h2> 
            ))}
        </div>
    );
}

export default NotesList;