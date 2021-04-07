import './App.css';
import Home from './admin/HomePage';
import AdminPage from './admin/AdminPage.jsx';
import { Route } from 'react-router';
import ItemPage from './admin/ItemPage';

function App() {
  return (
    <div>
      <Route path={'/'} exact>
        <Home />

      </Route>
      <Route path={'/Item/:id'} component={ItemPage}>      {/* skickar inte id */}
      {/* <Route path={'/Item/:id'} component={ItemPage}> */}
        <ItemPage />
      </Route>

      <Route path={'/Admin'}>
        <AdminPage />

      </Route>
    </div>
  );
}

export default App;
