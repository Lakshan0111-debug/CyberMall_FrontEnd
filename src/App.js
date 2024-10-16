import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './page/Home/Home'
import LogIn from './page/LogIn/LogIn';
import SignUp from './page/SignUp/SignUp';
import ForgotPassword from './page/ForgotPassword/ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/LogIn" element={<LogIn/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}></Route>

      </Routes>
    
    </BrowserRouter>
    

  );
}

export default App;
