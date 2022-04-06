
import config from 'config'

const C = {
  anonUser: {},
}

const useApi = () => ({
  doLogin: (props) => `${config.apiOrigin}/api/users/login.json`
})

export default useApi
export {
  C,
  useApi
}
