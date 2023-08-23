import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import RequireAuth from './RequireAuth';

function App() {
  return (
    <div className="App">
      <RequireAuth>
          <nav className="navbar navbar-expand navbar-light bg-light">
              <div className="container-fluid">
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link className='nav-link' to="/">Home</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to="/products">Products</Link>
                  </li>
                </ul>
              </div>

          </nav>
          <Outlet></Outlet>
        </RequireAuth>
    </div>
  );
}

export default App;
