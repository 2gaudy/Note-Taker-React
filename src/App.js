import logo from './logo.svg';
import './App.css';
import React from 'react';
import NotesProvider from './providers/NotesProvider';
import NotesList from './components/NotesList';
import InputProvider from './providers/InputProvider'

function App() {
  return (
    <div className="App">
      <InputProvider>
        <NotesProvider>
          <NoteInput/>
          <NotesList/>
        </NotesProvider>
      </InputProvider>
    </div>
  );
}

export default App;
