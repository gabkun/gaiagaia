import './App.css';
import {
  BrowserRouter as Router,Routes,Route,Navigate, Switch} from "react-router-dom";
import Home from './components/landing/landing';
import Login from './components/Login/login';
import Dashboard from './components/dashboard/dashboard';
import UsersTbl from './components/dashboard/User Approval/users';
import ClientsTbl from './components/dashboard/Client-Approval/clients';
import ClientDashboard from './components/ClientDashboard/clientdash';
import NotFound from './components/Not found/NotFound';
import SignUp from './components/signup/signup';
import SignupClient from './components/signup/Signup-Client/signupclient';
import SignupUser from './components/signup/Signup-User/signupuser';
import Category from './components/Category/category';
import UserDashboard from './components/UserDashboard/userdash';
import ProductPage from './components/products/productpage';
import Pricing from './components/pricing/pricing';
import Approval from './components/Approval/Approval';
import Rent from './components/ClientDashboard/Rental/rent';
import Privacy from './components/Privacy/privacy';
import Clientsub from './components/ClientDashboard/Pricing/Clientsub';
import CompanyDash from './components/CompanyDashboard/CompanyDash';
import Checkout from './components/ClientDashboard/Pricing/Checkout';
import Appointment from './components/products/Appointment/Appointment';
import Users from './components/dashboard/Users/Users';
import Clients from './components/dashboard/Clients/Clients';
import Products from './components/dashboard/Products/Products';
import Request from './components/ClientDashboard/Appointment/Request';
import Recover from './components/ForgotPass/Recover';
import Otp from './components/ForgotPass/Otp';
import PassReset from './components/ForgotPass/PassReset';
import About from './components/about/about';

import CheckoutUser from './components/UserDashboard/Pricing/CheckoutUser';
import Usersub from './components/UserDashboard/Pricing/Usersub';
import Subscribers from './components/dashboard/Subscribers/Subscribers';
import RequestUser from './components/UserDashboard/Appointment/Request';
import Analytics from './components/ClientDashboard/Analytics/analytics';
import Services from './components/Services/Services';




function App() {
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signupclient" element={<SignupClient />} />
          <Route path="/signupuser" element={<SignupUser />} />
          <Route path="/userstbl" element={<UsersTbl />} />
          <Route path="/clientstbl" element={<ClientsTbl />} />
          <Route path="/subscribersemail" element={<Subscribers />} />


          <Route path="/About" element={<About />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/product/:id/appointment" element={<Appointment />} />

          <Route path="/products" element={<Category />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/approval" element={<Approval />} />

          <Route path="/companydashboard/:compname" element={<CompanyDash />} />
          <Route path="/recover" element={<Recover />} />
          <Route path="/recover/otp/:username" element={<Otp />} />
          <Route path="/reset/:otp/:username" element={<PassReset />} />
          



          <Route path="/users" element={<Users />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/prods" element={<Products />} />
          <Route path="/services" element={<Services />} />



        <Route path="/" element={<Home />} />

          <Route path="/admindashboard/:accountid" element={<Dashboard />} />
          <Route path="/userdashboard/:user_id" element={<UserDashboard />} />
          <Route path="/clientdashboard/:user_id" element={<ClientDashboard />} />
          <Route path="/rent/:clientId" element={<Rent />} />
          <Route path="/subscription/:user_id" element={<Clientsub />} />
          <Route path="/subscriptionuser/:user_id" element={<Usersub />} />
          <Route path="/analytics/:clientId" element={<Analytics />} />
          <Route path="/request/:clientId" element={<Request />} />


          <Route path="/requestUser/:userId" element={<RequestUser />} />
          <Route path="/privacy" element={<Privacy />} />

        <Route path="/checkout/freeplan/:user_id" element={<Checkout subscriptionType ="1" />} />
        <Route path="/checkout/silverplan/:user_id" element={<Checkout subscriptionType ="2" />} />
        <Route path="/checkout/goldplan/:user_id" element={<Checkout subscriptionType ="3" />} />

        <Route path="/checkoutUser/freeplan/:user_id" element={<CheckoutUser subscriptionType ="1" />} />
        <Route path="/checkoutUser/silverplan/:user_id" element={<CheckoutUser subscriptionType ="2" />} />
        <Route path="/checkoutUser/goldplan/:user_id" element={<CheckoutUser subscriptionType ="3" />} />

        

          <Route path="*" element={<NotFound />} />



        </Routes>
      </Router>
    </div>
  </>
  );
}

export default App;
