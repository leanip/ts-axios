import axios from '../../src'

axios({
  url: '/error/get1'
}).then(res => {
  console.log('get1', res)
}).catch(e => {
  console.error('get1 catch: ', e)
})

axios({
  url: '/error/get'
}).then(res => {
  console.log('get res: ', res)
}).catch(e => {
  console.error('catch: ', e)
})
setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get'
  }).then((res) => {
    console.log(res)
  }).catch((e) => {
    console.log(e)
  })
}, 5000)

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e.message)
})
