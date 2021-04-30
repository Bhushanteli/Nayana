import React from 'react'
import ReactDOM from 'react-dom'

function Portal() {
    return ReactDOM.createPortal(
        <div>
          <h2> Poratal in react</h2>
        </div>,
        document.getElementById("poratal_root")
    )
}

export default Portal
