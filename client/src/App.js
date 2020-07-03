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
import Payment from './Components/Payment/Payment/Payment'
import ProviderDashboard from './Components/Profile/Provider/Dashboard/Dashboard'
import CustomerDashboard from './Components/Profile/Customer/Dashboard/Dashboard'
import Sessions from './Components/Profile/Sessions.js/Sessions'
import PageNotFound from './Components/PageNotFound/PageNotFound'
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
        <Route path='/customer/dashboard' component={CustomerDashboard} />
        <Route path='/provider/login' component={ProviderLogin} />
        <Route path='/provider/dashboard' component={ProviderDashboard} />
        <Route path='/session/:id' component={Sessions} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default App
