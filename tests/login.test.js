import http from 'k6/http'
import { check, sleep } from 'k6'
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))

export const options = {
  thresholds: {
    http_req_duration: ['p(90)<300'],
    http_req_failed: ['rate<0.01'], // less than 1% errors
  },
  stages: [
    { duration: '30s', target: 20 }, // ramp up to 20 users over 30 seconds
    { duration: '1m', target: 20 }, // stay at 20 users for 1 minute
    { duration: '30s', target: 0 },
  ],
}

export default function () {
  const url = 'http://localhost:3000/login'
  const payload = JSON.stringify(postLogin)

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = http.post(url, payload, params)
  check(response, {
    'is status 200': (r) => r.status === 200,
    'is token string': (r) => typeof r.json().token === 'string',
  })

  sleep(1)
}
