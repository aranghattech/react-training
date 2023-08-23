import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';
import { useSelector } from 'react-redux';
import TotalBillAmount from './TotalBillAmount';

function App() {

  let p = useSelector(state => state.productsState);
   let c = useSelector(state => state.cartState);

  return (
    <div className="App">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className='navbar-nav'>
             <li className='navbar-item'>
                Home
             </li>
             <li className='navbar-item mx-4'>
                Cart <span className='badge badge-danger bg-danger'>{c.cart.length}</span>
            </li>
          </ul>
       </nav>
       <h1>Found { p?.products.length} items</h1>
       <ProductList />

       <TotalBillAmount />
    </div>
  );
}

export default App;
