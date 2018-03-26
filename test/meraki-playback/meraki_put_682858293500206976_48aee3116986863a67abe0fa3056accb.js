const path = require('path')

// PUT /api/v0/organizations/730666/admins/682858293500206976

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// content-length: 131
// host: n213.meraki.com
// connection: close

// Request Body:
// {
//   "email": "john.doe2@example.com",
//   "name": "John Doe 2",
//   "orgAccess": "none",
//   "tags": [
//     {
//       "tag": "west",
//       "access": "read-only"
//     }
//   ],
//   "networks": []
// }

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Mon, 26 Mar 2018 09:18:04 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('vary', 'Accept-Encoding')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', '52ec8589f43e408a6ad1b7cf0917e5dd')
  res.setHeader('x-runtime', '0.122810')
  res.setHeader('x-rack-cache', 'invalidate, pass')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`{
  "id": "682858293500206976",
  "name": "John Doe 2",
  "email": "john.doe2@example.com",
  "orgAccess": "none",
  "networks": [],
  "tags": [
    {
      "tag": "west",
      "access": "read-only"
    }
  ]
}`, 'utf-8'))
  res.end()

  return __filename
}
