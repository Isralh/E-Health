import React from 'react'
import Home from './Components/Home/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import ProviderRegister from './Components/Register/Provider/ProviderRegister'
import Appointment from './Components/Appointment/Appointment/Appointment'
import CustomerRegister from './Components/Register/Customer/CustomerRegister'
import Login from './Components/Login/Login'
import Checkout from './Components/Checkout/Checkout'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/providerRegister' component={ProviderRegister} />
        <Route path='/bookAppointment' component={Appointment} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/createAccount' component={CustomerRegister} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  )
}

export default App
