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
import ProviderDashboard from './Components/Profile/Provider/Dashboard'
import CustomerDashboard from './Components/Profile/Customer/Dashboard'
import Sessions from './Components/Profile/VideoChat/Sessions'
import PageNotFound from './Components/PageNotFound/PageNotFound'
import InternalServerError from './Components/PageNotFound/InternalServerError'
import { ProtectByRole, ProtectUnAuthorized } from './Components/ProtectedRoute/ProtectedRoute'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/providerRegister' component={ProviderRegister} />
        <Route path='/createAccount' component={CustomerRegister} />
        <Route path='/customer/login' component={CustomerLogin} />
        <Route path='/customer/dashboard' component={CustomerDashboard} />
        <Route path='/bookAppointment' component={Appointment} />
        <Route path='/checkoutRegister' component={Checkout} />
        <Route path='/payment' component={Payment} />
        <Route path='/provider/login' component={ProviderLogin} />
        <Route path='/provider/dashboard' component={ProviderDashboard} />
        <ProtectUnAuthorized path='/session/:id' component={Sessions} />
        <Route path='/500' component={InternalServerError} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default App
