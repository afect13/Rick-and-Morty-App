import { Outlet } from 'react-router-dom';

import { Menu } from './components';

function App() {
  return (
    <>
      <header className="w-full font-poppins bg-zinc-800 ">
        <nav className="max-w-screen-lg py-4 mx-auto">
          <Menu />
        </nav>
      </header>
      <main className="w-full min-h-screen font-poppins bg-zinc-700">
        <section className="max-w-screen-lg mx-auto">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default App;
