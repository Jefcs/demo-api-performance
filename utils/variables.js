const config = JSON.parse(open('../config/local.json'))

export function getBaseUrl() {
  return __ENV.BASE_URL || config.baseUrl
}
