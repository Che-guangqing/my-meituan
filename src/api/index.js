import axios from '@/axios.js'

var api = {
  searchHotWords (params) {
    return axios.get('http://api.duyiedu.com/api/meituan/header/searchHotWords.json')
  },
  getSearchList (params) {
    return axios.get('http://api.duyiedu.com/api/meituan/header/search.json')
  },
  getMenuList (params) {
    return axios.get('http://api.duyiedu.com/api/meituan/index/nav.json')
  },
  getResultProducts (params) {
    return axios.get('http://api.duyiedu.com/api/meituan/index/resultsByKeywords.json')
  },
  getProductsList (params) {
    return axios.get('http://api.duyiedu.com/api/meituan/list/goodsList.json')
  },
  getClassifyList (params) {
    return axios.get('http://api.duyiedu.com/api/meituan/list/classify.json')
  },
  // eslint-disable-next-line no-dupe-keys
  getProductsList (params) {
    return axios.get('http://api.duyiedu.com/api/meituan/list/goodsList.json')
  },
  getHotCity (params) {
    return axios.get('http://api.duyiedu.com/api/meituan/city/hot.json')
  },
  getRecentCity (params) {
    return axios.get('http://api.duyiedu.com/api/meituan/city/recents.json')
  },
  getProvinceList () {
    return axios.get('http://api.duyiedu.com/api/meituan/city/province.json')
  },
  getCurPosition () {
    return axios.get('http://api.duyiedu.com/api/meituan/city/getPosition.json')
  },
  getCityList () {
    return axios.get('http://api.duyiedu.com/api/meituan/city/cityList.json')
  },
  login (params) {
    return axios.get('http://api.duyiedu.com/api/meituan/login', params)
  },
  register (params) {
    return axios.get('http://api.duyiedu.com/api/meituan/register', params)
  }
}
export default api
