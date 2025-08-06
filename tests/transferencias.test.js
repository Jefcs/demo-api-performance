import http from 'k6/http'
import { sleep, check } from 'k6'
import { getToken } from '../helpers/authentication.js'
import { getBaseUrl } from '../utils/variables.js'

export const options = {
  iterations: 1,
}

export default function () {
  const token = getToken()
  const url = `${getBaseUrl()}/transferencias`
  console.log(`Url: ${url}`)

  const payload = JSON.stringify({
    contaOrigem: 1,
    contaDestino: 2,
    valor: 11,
    token: '',
  })

  const params = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }

  const res = http.post(url, payload, params)
  check(res, { 'status is 201': (res) => res.status === 201 })
  sleep(1)
}
