import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ProductAPI from './components/ProductAPI.jsx';

function App() {
  return (
    <div>
    <Header />
    <ProductAPI />
    <Footer />
    </div>
  );
}

export default App;
