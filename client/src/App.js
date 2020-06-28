import React from 'react'
import Home from './Components/Home/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import ProviderRegister from './Components/Register/Provider/ProviderRegister'
import Appointment from './Components/Appointment/Appointment/Appointment'
import CustomerRegister from './Components/Register/Customer/CustomerRegister'
import CustomerLogin from './Components/Login/Customer/CustomerLogin'
import ProviderLogin from './Components/Login/Provider/ProviderLogin'
import Checkout from './Components/CheckoutRegister/Checkout'
import Payment from './Components/Payment/Payment'
import ProviderDashboard from './Components/Profile/Provider/Dashboard/Dashboard'
import CustomerDashboard from './Components/Profile/Customer/Dashboard/Dashboard'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/providerRegister' component={ProviderRegister} />
        <Route path='/bookAppointment' component={Appointment} />
        <Route path='/createAccount' component={CustomerRegister} />
        <Route path='/customer/login' component={CustomerLogin} />
        <Route path='/checkoutRegister' component={Checkout} />
        <Route path='/payment' component={Payment} />
        <Route path='/dashboard' component={CustomerDashboard} />
        <Route path='/provider/login' component={ProviderLogin} />
        <Route path='/provider/dashboard' component={ProviderDashboard} />
      </Switch>
    </Router>
  )
}

export default App
