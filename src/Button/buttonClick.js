import { useState } from "react"

function buttonStyle(status) {
  if (status) {
    document.getElementById('pump').innerHTML = "Pump On"
    document.getElementById('pump').style.backgroundColor = 'green'
  }
  else {
    document.getElementById('pump').innerHTML = "Pump Off"
    document.getElementById('pump').style.backgroundColor = 'red'
  }
}

export function ButtonClick() {

  const [clickStatus, setClickStatus] = useState(true)

  return (
    <button id='pump' onClick={() => setClickStatus(clickStatus ? (buttonStyle(false), false) : (buttonStyle(true),true))}>Click me to turn on Pump</button>
  )
}

