import { navigate, Link } from "gatsby"
import React, { useEffect, useState } from "react"

const ThankYou = () => {
  const [seconds, setSeconds] = useState(5)

  useEffect(() => {
    let counter = 5
    let interval = setInterval(() => {
      setSeconds(seconds => seconds - 1)
      counter--
      if (seconds <= 0 || counter <= 0) {
        clearInterval(interval)
        navigate("/")
      }
    }, 1000)
  }, [])

  return (
    <div className="section full-height">
      <div>Gracias por tu mensaje!</div>
      <div>
        Tu navegador te redirigirá a la Home nuevamente en... {seconds >= 0 ? seconds : "0"} segundos
      </div>
      <Link to="/">Volver ahora</Link>
    </div>
  )
}

export default ThankYou
