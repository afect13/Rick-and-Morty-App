import { Outlet } from 'react-router-dom';

import { FeatureProvider, Header, Layout, Menu, ThemeProvider } from './components';

function App() {
  return (
    <ThemeProvider>
      <FeatureProvider>
        <Header>
          <Menu />
        </Header>
        <Layout>
          <Outlet />
        </Layout>
      </FeatureProvider>
    </ThemeProvider>
  );
}

export default App;
