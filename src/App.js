import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Notfound from './component/Notfound/Notfound';
import Header from './component/Header/Header';
import AuthProvider from './context/AuthProvider';
import Shipping from './component/Shipping/Shipping';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
      <Header></Header>
      <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <PrivateRoute path="/shipping">
           <Shipping></Shipping>
         </PrivateRoute>
         <PrivateRoute path="/PlaceOrder">
           <PlaceOrder></PlaceOrder>
         </PrivateRoute>
         <Route path="/register">
           <Register>
           </Register>
         </Route>
         <Route path="*">
           <Notfound></Notfound>
         </Route>
      </Switch>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
