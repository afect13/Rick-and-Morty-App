import classNames from 'classnames';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Menu } from './components';
import { ThemeContext } from './context';

function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleTheam = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheam,
      }}
    >
      <header
        className={classNames('w-full font-poppins', {
          ['bg-zinc-800']: isDark,
          ['bg-zinc-200']: !isDark,
        })}
      >
        <nav className="max-w-screen-lg py-4 mx-auto">
          <Menu />
        </nav>
      </header>
      <main
        className={classNames('w-full min-h-screen font-poppins', {
          ['bg-zinc-700']: isDark,
          ['bg-zinc-400']: !isDark,
        })}
      >
        <section className="max-w-screen-lg mx-auto">
          <Outlet />
        </section>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
