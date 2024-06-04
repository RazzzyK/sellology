import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import {store, persistor} from './redux/Store';
import Home from './pages/Home';
import Pricing from './features/Pricing';
import Header from './features/Header';
import BookDemo from './components/BookDemo';
import ContactPage from './pages/Contact';
import Services from './pages/Services';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Footer from './features/Footer';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';

function App() {
  return (
    <div className='App'>
      {/* <Provider store={store}> */}
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <BrowserRouter>
              <Header />   
              <Routes>           
                  <Route index element={<Home />} />
                  <Route path='/services' element={<Services />} />
                  <Route path='/pricing' element={<Pricing />} />
                  <Route path='/contact' element={<ContactPage />} />
                  <Route path="/book-demo" element={<BookDemo />} />
                  <Route path="/tos" element={<TermsOfService />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/getstarted" element={<GetStarted />} />
                  <Route path="/login" element={<Login />} />
              </Routes>
              <Footer />
          </BrowserRouter>
        {/* </PersistGate> */}
      {/* </Provider> */}
    </div>
  );
}

export default App;