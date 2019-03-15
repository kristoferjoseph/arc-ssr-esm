import { html } from './vendor/preact.mjs'
import Header from './ui/header.mjs'
import insert from './insert.mjs'

function Activity (props) {
  return html`
<div>
  <${Header}>
    <h1>HALO</h1>
  <//>
  <button
    onclick=${e => { console.log('sup') }}
  >
    click me plz
  </button>
</div>
  `
}

insert(Activity, {})

export default Activity
