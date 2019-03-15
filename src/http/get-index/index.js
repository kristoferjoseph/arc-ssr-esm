require = require('esm')(module)
const Layout = require('@architect/views/layout.js')
const Script = require('@architect/views/script.js')
const { html } = require('@architect/views/modules/vendor/preact.mjs')
const Activity = require('@architect/views/modules/activity.mjs').default
const render = require('preact-render-to-string')

exports.handler = async function http (req) {
  let content = render(html`<${Activity}><//>`)
  let scripts = Script('/modules/activity.mjs')
  let body = Layout({ content, scripts })
  return {
    type: 'text/html; charset=utf8',
    body
  }
}
