import axios from "axios"

export const boostData = async (token, boostId) => {   
    console.log('token: ' + token);
    console.log('boostId: ' + boostId);
    
    const headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
    }

    const result = await axios.post(`https://moneytree-api.extensi.one/api/free-boosts/${boostId}/buy/1`, null, { headers })
    alert(result.data.message)
}