import { useState } from "react"
import './button.css'

function buttonStyle(status) {
  if (status) {
    document.getElementById('red-pump').innerHTML = "Pump On"
    document.getElementById('red-pump').id = 'green-pump'
  }
  else {
    document.getElementById('green-pump').innerHTML = "Pump Off"
    document.getElementById('green-pump').id = 'red-pump'
  }
}

export function ButtonClick() {

  const [clickStatus, setClickStatus] = useState(false)

  return (
    <div id='red-pump' className="pump" onClick={() => setClickStatus(clickStatus ? (buttonStyle(false), false) : (buttonStyle(true),true))}>Pump Off</div>
  )
}