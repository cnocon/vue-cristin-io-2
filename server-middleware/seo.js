/* eslint-disable no-console */
const redirects = require('./redirects-301.json')

module.exports = function (req, res, next) {
  const redirect = redirects.find((r) => r.from === req.url)
  const removedPage = {
    from: '/articles/useful-npm-packages-and-gatsby-plugins-from-the-cristinio-redesign',
    to: '/blog/1',
  }
  if (redirect) {
    console.log(`redirect: ${redirect.from} => ${redirect.to}`)
    res.writeHead(301, { Location: redirect.to })
    res.end()
  } else if (removedPage.from === req.url) {
    res.writeHead(410, { Location: redirect.to })
    res.end()
  } else {
    next()
  }
}
