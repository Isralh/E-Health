import React from 'react'
import { UserNotLoggedIn, CustomerLoggedIn } from './NavView'

const Navigation = ({ showNavMenu, showDropDownChoice, userStatus, currentUser, handleDropDown, userName, handleLogout }) => {
  return (
    <div className='nav-menu' style={{ display: showNavMenu ? 'block' : 'none' }}>
      {userStatus === null
        ? <UserNotLoggedIn
          handleDropDown={handleDropDown}
          showDropDownChoice={showDropDownChoice}
        />
        : currentUser.role === 'customer'
          ? <CustomerLoggedIn
            handleDropDown={handleDropDown}
            handleLogout={handleLogout}
            userName={userName}
            showDropDownChoice={showDropDownChoice}
          /> : null}
    </div>
  )
}

export default Navigation
