import head from './head.mjs'

export default function Layout (props) {
  return `
<!DOCTYPE html>
<html lang="en">
${head(props)}
<body>
  <div id="js-content">
    ${props.content}
  </div>
  ${props.scripts}
</body>
</html>
  `
}
