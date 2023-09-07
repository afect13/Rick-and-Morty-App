import { Outlet } from 'react-router-dom';

import { FeatureProvider, Header, Layout, Menu, ThemeProvider } from './components';
import { withAuth } from './hoc';

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

export default withAuth(App);
