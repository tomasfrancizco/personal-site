import axios from "axios"

const local_url = "http://localhost:3000"

export const uploadMessage = message => {
  return axios
    .post(`${local_url}/message`, message)
    .then(res => res.data.message)
    .catch(error => console.log(error))
}
