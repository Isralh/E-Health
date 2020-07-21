
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const ProtectPayment = ({ component: Component, ...rest }) => {
  /* check if token is available to signal signed in user */
  const token = window.localStorage.getItem('token')

  /* if user's not signed in redirect them to the location they came from else
    grant them permission to view page */
  return (
    <Route
      {...rest}
      render={props => {
        if (token !== null || undefined) {
          return <Component {...props} />
        } else {
          return <Redirect to={{
            pathname: '/bookAppointment'
          }}
          />
        }
      }}
    />
  )
}

export const ProtectCustomerDashboard = ({ component: Component, ...rest }) => {
  /* check if token is available to signal signed in user */
  const token = window.localStorage.getItem('token')

  /* if user's not signed in redirect them to the location they came from else
    grant them permission to view page */
  return (
    <Route
      {...rest}
      render={props => {
        if (token !== null || undefined) {
          return <Component {...props} />
        } else {
          return <Redirect to={{
            pathname: '/customer/login'
          }}
          />
        }
      }}
    />
  )
}

export const ProtectProviderLogin = ({ component: Component, ...rest }) => {
  /* check if token is available to signal signed in user */
  const token = window.localStorage.getItem('token')

  /* if user's not signed in redirect them to the location they came from else
    grant them permission to view page */
  return (
    <Route
      {...rest}
      render={props => {
        if (token !== null || undefined) {
          return <Component {...props} />
        } else {
          return <Redirect to={{
            pathname: '/provider/login'
          }}
          />
        }
      }}
    />
  )
}