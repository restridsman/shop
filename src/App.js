import './App.css';
import Home from './admin/HomePage';
import AdminPage from './admin/AdminPage.jsx';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import ItemPage from './admin/ItemPage';

function App() {
  return (

    <Router>
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
    </Router>
  );
}

export default App;
