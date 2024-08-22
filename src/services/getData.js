import axios from "axios";

export const getData = async (token, url) => {   
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
    const headersJson = JSON.stringify(headers)
    const result = await axios.get(`https://moneytree-api.extensi.one/api/${url}`, { headers: JSON.parse(headersJson) })
       
    return result
}