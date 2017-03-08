/**
 * Created by luxianying on 2017/3/6.
 */
import axios from "axios";

// if (proccess.env.NODE_ENV === 'production') {
//   axios.defaults.baseURL = 'https://next-api.wallstreetcn.com';
// } else {
//   axios.defaults.baseURL = 'http://192.168.101.108:3000';
// }
// 生产环境
// axios.defaults.baseURL = 'https://next-api.wallstreetcn.com';

// 开发环境
axios.defaults.baseURL = 'http://192.168.101.108:3000';
// 获取打赏人的信息
export function getTipper(messageid) {
  return axios.get('/api/premium/authorTips', {
    params: {
      messageid: messageid
    }
  })
}

// 打赏作者
export function authorTip(MessageId, TipAmount, token) {
  return axios.post('/api/premium/authorTip', {
    params: {
      MessageId,
      TipAmount
    },
    header: {
      "X-Appgo-Token": token,
      'Content-Type': 'application/json'
    }
  })
}

// 验证token是否正确
export function checkToken(token) {
  return axios.get('api/user/info', {
    headers: {
      "X-Appgo-Token": token
    }
  })
}
