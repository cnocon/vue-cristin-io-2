/* eslint-disable no-console */
const redirects = require('../301.json')

module.exports = function (req, res, next) {
  const redirect = redirects.find((r) => r.from === req.url)

  if (redirect) {
    res.writeHead(301, { Location: redirect.to })
    res.end()
  } else {
    next()
  }
}
