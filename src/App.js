import Home from './vue/HomeVue';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import FavorisScreen from './vue/favorisScreen/FavorisScreen';
import Favoris from './vue/favorisScreen/Favoris';
import ContactScreen from './vue/contactScreen/ContactScreen';
function App() {
  return  <>
            <BrowserRouter>
              <Header/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/favoris/" element={<Favoris/>}/>
                <Route path="/favoris/:id" element={<FavorisScreen/>}/>
                <Route path="/contact" element={<ContactScreen/>}/>
              </Routes>
            </BrowserRouter>
          </>
}

export default App;
