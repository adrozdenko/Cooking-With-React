import React, { useState } from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('green');
  const changeThemeBtnStyle =
    theme === 'green'
      ? { backgroundColor: 'red' }
      : { backgroundColor: 'green' };
  const txtColor = 'white';
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme, color: txtColor }}>
      <h2> CounterHooks</h2>
      <Counter initialCount={33}></Counter>

      <h2> Counter Hooks</h2>
      <CounterHooks initialCount={2}></CounterHooks>
      <br />
      <br />
      <button
        style={{ color: 'white', ...changeThemeBtnStyle }}
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === 'red' ? 'green' : 'red';
          })
        }>
        Toggle theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
