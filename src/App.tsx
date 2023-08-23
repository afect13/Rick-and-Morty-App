import { Outlet } from 'react-router-dom';

import { Header, Layout, Menu, ThemeProvider } from './components';

function App() {
  return (
    <ThemeProvider>
      <Header>
        <Menu />
      </Header>
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
