import React, {useReducer, createContext} from 'react'
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
//  import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ErrorPage from "./components/Errorpage";
import Logout from "./components/Logout";

import { initialState, reducer } from "./reducer/UseReducer.js";
import  Usersdetails from './components/Usersdetails';
import { EditAbout } from './components/EditAbout';


// we create a contextAPI 
export const UserContext = createContext();

  

const Routing = () => {
  
  return (
    <>
       <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/details">
        <Usersdetails />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/edit">
        <EditAbout />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>
        
      <Route path="/logout">
        <Logout />
      </Route>

      <Route path="/errorpage" >
        <ErrorPage />
      </Route>
    </Switch>
    </>
  )
}

const App = () => {

  //* we use useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
   
      <UserContext.Provider value={{state, dispatch}}>
        
        {/* {<Navbar /> } */}
        <Routing />

      </UserContext.Provider>
  )
}

export default App



///////////////////////////////////////////
// import Home from './components/Home';
// import 'bootstrap/dist/css/bootstrap.css';
// // import Registration from './Component/signup';
// import Login from './components/Login';
// import { Route, BrowserRouter, Router } from 'react-router-dom';
// import './App.css';
// import Payment from './components/Payment';
// import Signup from './components/Signup';
// import AddProduct from './components/Product/AddProduct';
// import Dashboard from './components/Dasboard';
// import ProductList from './components/Product/ProductList';
// import Users from './components/Users/UserList';
// import EditProduct from './components/Product/EditProduct';
// import ViewProduct from './components/Product/ViewProduct';
// import Navbar from './components/Navbar';
// import { createContext, useReducer } from 'react';
// import { initialState, reducer } from './reducer/UseReducer';
// import Logout from './components/Logout'
// import Details from './components/Details';

// // import { initialState, reducer } from "./reducer/UseReducer";



  
//     export const UserContext= createContext();
//     const Routing =() =>{
//       return (
//         <div>
//         <BrowserRouter>
//         <Router>
  
//         <Route exact path='/' element={<Home />}></Route>
//         <Route exact path='/registration' element={<Signup />} ></Route>
//         <Route exact path='/login' element={<Login />} ></Route>
//         <Route exact path='/payment' element={<Payment/>} ></Route>
//         <Route exact path='/dashboard' element={<Dashboard/>}></Route>
//         <Route exact path='/addProduct' element={<AddProduct/>} ></Route>
//         <Route exact path='/editProduct' element={<EditProduct />} ></Route>
  
//         <Route  excat path='/productList' element={<ProductList/>} ></Route>
//         <Route exact path='/viewproduct' element={<ViewProduct/>} ></Route>
//         <Route exact path='/userslist' element={<Users></Users>} ></Route>
//         <Route exact path='/navbar' element={<Navbar/>} ></Route>
//         <Route exact path='/details' element={<Details/>} ></Route>
//         <Route exact path='/Logout' element={<Logout/>} ></Route>
        
//         </Router>
//       </BrowserRouter>
//       </div>
//       )
//     }
//     const App= () =>{
//       const [state,dispatch]=useReducer(reducer,initialState)
//   return (
    
//     <div>
//       <UserContext.Provider value={{state,dispatch}} >
//        <Routing/>
//       </UserContext.Provider>

//     </div>
//   );
// }

// export default App;
