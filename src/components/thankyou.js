import { navigate, Link } from "gatsby"
import React, { useState } from "react"

const ThankYou = () => {
  const [timeLeft, setTimeLeft] = useState(5)

  // const time = () => {
  //   let secs = 5
  //   const interval = setInterval(() => {
  //     setTimeLeft(secs)
  //     secs -= 1
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
