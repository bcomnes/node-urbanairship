var extend = require('util')._extend
var url = require('url')

var endpoints = {
  push: '/api/push',
  push_validate: '/api/push/validate',
  schedules: '/api/schedules/',
  pipelines: '/api/pipelines',
  pipeline_validate: '/api/pipelines/validate',
  pipeline_deleted: '/api/pipelines/deleted',
  channels: '/api/channels',
  channels_tags: '/api/channels/tags',
  named_users_tags: '/api/named_users/tags/'
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
