import axios from "axios"

export const boostData = async (token, boostId) => {   
    const headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
    }

    const result = await axios.post(`https://moneytree-api.extensi.one/api/free-boosts/${boostId}/use`, null, { headers })
    alert(result.data.message)
}