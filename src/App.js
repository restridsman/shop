import './App.css';
import Home from './admin/HomePage';
import AdminPage from './admin/AdminPage.jsx';
import { Route } from 'react-router';

function App() {
  return (
    <div>
      <Route path={'/'} exact>
        <Home />

      </Route>

      <Route path={'/Admin'}>
        <AdminPage />

      </Route>
    </div>
  );
}

export default App;
