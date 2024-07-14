import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MerchantLogin from './components/MerchantLogin';
import MerchantSignUp from './components/MerchantSingUp';
import MerchantHomePage from './components/MerchantHomePage';
import MerchantUpdate from './components/MerchantUpdate';
import ViewProduct from './components/viewProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/merchantlogin" element={<MerchantLogin/>}/>
          <Route path="/merchantsignup" element={<MerchantSignUp/>}/>
          <Route path="/merchanthomepage/*" element={<MerchantHomePage/>}/>
          <Route path='/merchantUpdate' element={<MerchantUpdate/>}/>
          <Route path='/viewProduct' element={<ViewProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
