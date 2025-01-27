// ComponentOne.js
import React, { useContext } from 'react';
import { GlobalContext } from '../context'; // Context import karo

const ComponentOne = () => {
  const { user, theme, setUser, setTheme } = useContext(GlobalContext);

  return (
    <div>
      <h2>User: {user}</h2>
      <h2>Theme: {theme}</h2>
      <button onClick={() => setUser('New User')}>Change User</button>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ComponentOne;
