import axios from 'axios';
import { getJwt } from './jwt';

export default () => {
  const jwt = getJwt();

  if (!jwt) {
    return false;
  }

  axios.get("http://localhost:3001/api/v1/user/get_user/", {
    headers: { Authorization: `Bearer ${jwt}` }
  })
    .then(() => {
      return true;
    }).catch(error => {
      if (error.response && error.response.status == 401) {
        localStorage.removeItem("jwt-token");
      } else {
        // TODO: Display message saying there was an unexpected error
      }
      return false;
    })
}