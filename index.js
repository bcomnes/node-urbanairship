var request = require('request')
var package_json = require('./package.json')
var api = require('./lib/api')

var headers = {
  'User-Agent': 'urbanairship/' + package_json.version + ';nodejs',
  'Accept': 'application/vnd.urbanairship+json; version=3;'
}

function UrbanAirship (appKey, masterSecret) {
  if (!(this instanceof UrbanAirship)) {
    return new UrbanAirship(appKey, masterSecret)
  }

  this.appKey = appKey
  this.masterSecret = masterSecret
}

UrbanAirship.prototype.push = function push (pushObj, cb) {
  var self = this
  var options = {
    url: api.getUri('push'),
    headers: headers,
    json: true,
    auth: {user: self.appKey, pass: self.masterSecret},
    body: pushObj
  }
  request.post(options, cb)
}

UrbanAirship.prototype.validate = function validate (pushObj, cb) {
  var self = this
  var options = {
    url: api.getUri('validate'),
    headers: headers,
    json: true,
    auth: {user: self.appKey, pass: self.masterSecret},
    body: pushObj
  }

  request.post(options, cb)
}

UrbanAirship.prototype.schedule = function schedule (pushObj, cb) {
  var self = this
  var options = {
    url: api.getUri('schedules'),
    headers: headers,
    json: true,
    auth: {user: self.appKey, pass: self.masterSecret},
    body: pushObj
  }

  request.post(options, cb)
}

module.exports = UrbanAirship
