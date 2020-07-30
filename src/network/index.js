import axios from 'axios'

export default  function request(config){
  const instance = axios.create({
   // baseURL:'/api',
    timeout:500000
  })
  return instance(config)
}
