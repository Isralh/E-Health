import React from 'react'
import { BeatLoader } from 'react-spinners'

const Loading = ({ loadingState, loadingClass }) => {
  return (
    <div className={loadingClass}>
      <BeatLoader
        size={50}
        color='rgb(88, 72, 72)'
        loading={loadingState}
      />
    </div>
  )
}

export default Loading
