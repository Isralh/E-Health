import React from 'react'

const CustomerView = ({ users = [] }) => {
  return (
    <div>
      <div>
        {users.length > 1
          ? <h1>DOCTOR IS ON THE LINE AND WILL CALL YOU SHORTLY</h1>
          : <h1>WAITING ON DOCTOR</h1>}
      </div>
    </div>
  )
}

export default CustomerView
