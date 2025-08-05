import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
  iterations: 10,
  thresholds: {
    http_req_duration: ['p(95)<3'],
    http_req_failed: ['rate<0.01'], // less than 1% errors
  },
}

export default function () {
  const url = 'http://localhost:3000/login'
  const payload = JSON.stringify({
    username: 'julio.lima',
    senha: '123456',
  })

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
