import { useState } from "react"

export default function CountButton(props) {

  const [currentCount, setCurrentCount] = useState(0)
  
  function handleClick() {
    setCurrentCount(currentCount + props.increment)
  }

  return (
    <div className="button">
      <button onClick={handleClick}>+{props.increment}</button>
      <div>{currentCount}</div>
    </div>
  )
}