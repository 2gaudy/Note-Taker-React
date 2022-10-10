import React from "react";

const NotesContext = React.createContext();

const NotesList = ["Test"]

const NotesProvider = ({children}) => {
    const [notes, setNotesList] = React.useState(NotesList)

    return(
        <NotesContext.Provider value={{notes}}>
            {children}
        </NotesContext.Provider>
    );
}

export const useNotesContext = () => React.useContext(NotesContext);

export default NotesProvider;