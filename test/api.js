var test = require('tape')

var api = require('../lib/api')

test('getUri', function (t) {
  t.plan(1)
  var pushUri = api.getUri('push')
  t.equal(pushUri, 'https://go.urbanairship.com/api/push', 'push url is good')
})
