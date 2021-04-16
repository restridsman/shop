import './App.css';
import Home from './admin/HomePage';
import AdminPage from './admin/AdminPage.jsx';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import ItemPage from './admin/ItemPage';
import Header from './components/Header';
import ProductAPI from './components/ProductAPI';
import Items from './components/Items';
import CreateItemPage from './admin/CreateItemPage';



function App() {

  

  

  
  return (

    <Router>
    <div>
    <Header />
    
      <Route path={'/'} exact>
        <Home />

      </Route>
      <Route path={'/Item/:id'} component={ItemPage} />      {/* skickar inte id */}
      {/* <Route path={'/Item/:id'} component={ItemPage}> */}
      {/* <Route path={'/Admin'}>
        <AdminPage />

      </Route> */}
      <Route path={'/Admin'} component={AdminPage} />

      <Route path={'/CreateItem'} component={CreateItemPage} />
      
    </div>
    </Router>
  );
}

export default App;
