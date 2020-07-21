
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

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

  /* if user's not signed in redirect them to the login page else
    grant them permission to view the page if they have the correct role */
  return (
    <Route
      {...rest}
      render={props => {
        if (token !== null || undefined) {
          const user = jwtDecode(token)
          if (user.role === 'customer') {
            return <Component {...props} />
          } else {
            return <Redirect to={{
              pathname: '/customer/login'
            }}
            />
          }
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

export const ProtectProviderDashboard = ({ component: Component, ...rest }) => {
  /* check if token is available to signal signed in user */
  const token = window.localStorage.getItem('token')

  /* if user's not signed in redirect them to the login page else
    grant them permission to view the page if they have the correct role */
  return (
    <Route
      {...rest}
      render={props => {
        if (token !== null || undefined) {
          const user = jwtDecode(token)
          if (user.role === 'provider') {
            return <Component {...props} />
          } else {
            return <Redirect to={{
              pathname: '/provider/login'
            }}
            />
          }
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
