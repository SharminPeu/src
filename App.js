import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header/Header';
import Homepage from './component/Homepage/Homepage';
import NotFound from './component/NotFound/NotFound';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import AllProducts from './component/AllProducts/AllProducts';
import Purchase from './component/Purchase/Purchase';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import AuthProvider from './component/Context/AuthProvider';
import Dashboard from './component/Dashboard/Dashboard';


import Footer from './component/Footer/Footer';





function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Homepage></Homepage>

          </Route>
          <Route exact path='/allProducts'>
            <AllProducts></AllProducts>

          </Route>
          
         
          
          <Route exact path='/login'>
            <Login></Login>
          </Route>

          <Route exact path='/register'>
           <Register></Register>
          </Route>
          <Route exact path='/home'>
            <Homepage></Homepage>

          </Route>
          
         
         
          
          <PrivateRoute exact path='/dashboard'>
            <Dashboard></Dashboard>

          </PrivateRoute>
          <PrivateRoute exact path='/purchase/:id'>
            <Purchase></Purchase>

          </PrivateRoute>
         
         

          <Route path='*'>
            <NotFound></NotFound>

          </Route>
         

        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    
    </div>
  );
}

export default App;
