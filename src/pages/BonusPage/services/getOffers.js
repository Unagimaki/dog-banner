import axios from "axios";

export const getOffers = async (token) => {
  if (!token) return
  const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
  }
  const headersJson = JSON.stringify(headers)
  try {
    const result = await axios.get(`https://moneytree-api.extensi.one/api/offers`, { headers: JSON.parse(headersJson) })
    return result
  } catch (error) {
    console.log('getOffers error')
  }    
}