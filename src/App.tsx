import { Outlet } from 'react-router-dom';

import { FeatureProvider, Header, Layout, Menu, ThemeProvider } from './components';
import { useCheckAuth } from './hooks';

function App() {
  useCheckAuth();
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
