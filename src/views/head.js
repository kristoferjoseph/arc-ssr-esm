module.exports = function Head (props) {
  props = props || {}
  var title = props.title || 'POC ESM'
  return `
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <title>${title}</title>
  <style>
    body {
      font-family: sans-serif;
    }
  </style>
</head>
`
}
