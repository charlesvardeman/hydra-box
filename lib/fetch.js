const fileFetch = require('file-fetch')
const httpFetch = require('nodeify-fetch')
const protoFetch = require('proto-fetch')

module.exports = protoFetch({
  file: fileFetch,
  http: httpFetch,
  https: httpFetch
})
