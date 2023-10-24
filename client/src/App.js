import './App.css';
import Login from './Components/Login';
import AboutUs from './Views/AboutUs';
import ContainerHome from './Views/ContainerHome';
import Footer from './Views/Footer';
import NavBar from './Views/NavBar';
import {Routes, Route} from "react-router-dom"
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from './Views/PageNotFound';
import DisplayOneOrder from './Components/DisplayOneOrder';
import PageAddOrder from './Views/PageAddOrder';
import DisplayOrderSuccess from './Components/DisplayOrderSuccess';
import DisplayAdmin from './Components/DisplayAdmin';




function App() {



  return (
    <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ContainerHome/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/login' element={<Login r/>}/>
          <Route path='/register' element={<Register />}/>
          <Route exact path='/dashboard' element={<Dashboard />}/>
          <Route exact path='/newOrder' element={<PageAddOrder/>}/>
          <Route exact path='/ordersSuccess' element={<DisplayOrderSuccess />}/>
          <Route path='/api/orders/:id' element={<DisplayOneOrder/>}/>

          <Route exact path='/showAdmin' element={<DisplayAdmin />}/>

          <Route path={"*"} element={<PageNotFound/>}/>
        </Routes>
        
        <Footer/>
    </div>
  );
}

export default App;
