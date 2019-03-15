import { html, render } from './vendor/preact.mjs'
export default function insert (page, props) {
  if (typeof window !== 'undefined') {
    console.log('INSERT')
    let content = document.getElementById('js-content')
    render(
      html`<${page} ...${props}><//>`,
      content,
      content.firstElementChild
    )
  }
}
