import axios from "axios"

const isProduction = process.env.NODE_ENV === "production"
const local_url = isProduction
  ? "https://www.tomasfreire.com"
  : "http://localhost:3000"

export const uploadMessage = message => {
  return axios
    .post(`${local_url}/message`, message)
    .then(res => res.data.message)
    .catch(error => console.log(error))
}
