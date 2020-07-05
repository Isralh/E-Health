
import React from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom'
import JwtDecode from 'jwt-decode'
export const ProtectUnAuthorized = ({ component: Component, ...rest }) => {
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
            pathname: '/',
            state: {
              from: props.location
            }
          }}
          />
        }
      }}
    />
  )
}

export const ProtectByRole = ({ component: Component, roleType, ...rest }) => {
  const token = window.localStorage.getItem('token')
  const user = JwtDecode(token)
  const history = useHistory()

  /* if the user's role is correct grant them permission to view the page else redirect to
the location they came from */
  return (
    <Route
      {...rest}
      render={props => {
        if (token === null) {
          history.goBack()
        } else if (token !== null) {
          if (user.role === roleType) {
            return <Component {...props} />
          } else {
            history.goBack()
          }
        }
      }}
    />
  )
}
