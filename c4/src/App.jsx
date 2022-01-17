import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { Apply } from './components/Applyhere';
import { PrivateRoute } from './components/PrivateRoutes';


function App() {
  return (
    <div className="App">

      <Navbar />
     
<Routes>
  <Route path='/' element={<Login />}></Route>

  <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
  
  <Route path='/apply' element={<PrivateRoute> <Apply/></PrivateRoute>}></Route>
</Routes>




    </div>
  );
}

export default App;
