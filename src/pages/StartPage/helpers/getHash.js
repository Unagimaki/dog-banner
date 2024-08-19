import config from '../../../config.json'

export const getHash = (data) => {
    const token = config.token
    const params = {}

    query.split('&').forEach(param => {
      const [key, value] = param.split('=')
      if (key === 'user') {
        params[key] = JSON.parse(decodeURIComponent(value))
      } else {
        params[key] = decodeURIComponent(value)
      }
    })

    const sortedKeys = Object.keys(params).sort((a, b) => a.localeCompare(b));
    const signatureString = sortedKeys.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&');
    const signatureWithToken = `${token}${signatureString}`;
    const hashedString = SHA256(signatureWithToken).toString();
    return hashedString
}