import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { Apply } from './components/Applyhere';

function App() {
  return (
    <div className="App">

      <Navbar />
     
<Routes>
  <Route path='/' element={<Login />}></Route>

  <Route path='/dashboard' element={<Dashboard/>}></Route>
  <Route path='/apply' element={<Apply/>}></Route>
</Routes>




    </div>
  );
}

export default App;
