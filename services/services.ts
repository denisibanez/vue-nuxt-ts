import axios from 'axios'

export default class Services {
  getExample(param: any): object  {
    const request = axios.get(`${process.env.BASE_URL}/us/rss/topalbums/limit=${param}`)
      .then(response => response)
      .catch(e => {
        throw e
      }).finally(() => {

      })
    return request
  }

  postExample(param: any): object {
    const request = axios.post(`${process.env.VUE_APP_BASE_PATH}`, param)
      .then(response => response)
      .catch(e => {
        throw e
      }).finally(() => {

      })
    return request
  }
}