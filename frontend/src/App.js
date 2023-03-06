import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './screens/UserPages/HomePage/HomePage'
import UserLogin from './screens/UserLogin/UserLogin';
import RegisterUser from './screens/RegisterUsers/RegisterUser';
import SellerAdd from './screens/SellerPages/SellerAdd';


function App() {
  return (
      <BrowserRouter>
          <Header />
                  <Routes>
     <Route path='/' element={<HomePage />}/>
     <Route path='/userlogin' element={<UserLogin />}/>
     <Route path='/userregister' element={<RegisterUser />}/>
       <Route path='/sellerAdd' element={<SellerAdd />}/>
      {/* <Route path='/' element={<HomePage />}/>
      <Route path='/sellerCategoryAdd' element={<Seller_CategoryAdd />}/>
      <Route path='/sellerCategoryAll' element={<Seller_CategoryAll />}/>
       <Route path='/userlogin' element={<UserLogin />}/>
       <Route path='/userregister' element={<RegisterUser />}/>

       <Route path='/adminhome' element={<AdminHome />}/>

       <Route path='/tophome' element={<TopHome />}/>

       <Route path='/cartC' element={<CartCheckout />}/> */}

    </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
