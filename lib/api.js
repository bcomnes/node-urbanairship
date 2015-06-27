var extend = require('util')._extend
var url = require('url')

var endpoints = {
  push: '/api/push',
  validate: '/api/push/validate'
}

exports.endpoints = endpoints

var apiUrl = {
  protocol: 'https',
  host: 'go.urbanairship.com'
}

function getUri (endpoint) {
  var path = endpoints[endpoint]
  var urlObj = extend({pathname: path}, apiUrl)
  return url.format(urlObj)
}

exports.getUri = getUri
