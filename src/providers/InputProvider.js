import React from 'react';

const InputProvider = React.createContext();

const NoteList = {
    "list":" "
}

function InputProvider({children}) {
    
    const {NoteList, setNoteList} = useState(NoteList)

    return(

    <InputProvider.Provider value={NoteList["list"]}>
        {children}
    </InputProvider.Provider>

    );
}

export const useInputContext = () => React.useContext();
export default NoteInput;

