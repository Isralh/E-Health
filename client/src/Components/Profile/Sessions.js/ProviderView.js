import React from 'react'

const ProviderView = ({ users = [], role }) => {
  return (
    <div>
      <div>
        {users.length > 1
          ? <div>
            <h1>CLIENT IS AWAITING YOU</h1>
            <button>CALL CLIENT</button>
          </div>
          : <h1>WAITING ON CLIENT</h1>}
      </div>
    </div>
  )
}

export default ProviderView
