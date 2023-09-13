import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import './App.css';

const TextInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    }
  }));

  return <input ref={inputRef} type="text" placeholder="Tapez quelque chose..." />;
});

function App() {
  const textInputRef = useRef(null);

  return (
    <div className="App">
      <header className="App-header">
        <TextInput ref={textInputRef} />
        <button onClick={() => textInputRef.current.focus()}>Mettre le focus</button>
        <button onClick={() => textInputRef.current.clear()}>Effacer</button>
      </header>
    </div>
  );
}

export default App;
