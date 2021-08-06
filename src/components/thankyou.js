import { navigate, Link } from "gatsby"
import React, { useState } from "react"

const ThankYou = () => {

  let secs = 5;

  const [timeLeft, setTimeLeft] = useState(secs)

  // const time = () => {
  //   const interval = setInterval(() => {
  //     secs -= 1
  //     console.log(secs)
  //     setTimeLeft(secs)
  //   }, 1000)
  //   console.log(timeLeft)
  //   if (secs <= 0) {
  //     clearInterval(interval)
  //     navigate("/")
  //   }
  // }

  return (
    <div className="section full-height">
      <div>Gracias por tu mensaje!</div>
      {/* <div>
        Tu navegador te redirigirá a la Home nuevamente en... {timeLeft}{" "}
        segundos
      </div> */}
      <Link to="/">Volver</Link>
    </div>
  )
}

export default ThankYou
