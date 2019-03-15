export default function Script (src) {
  let stage = process.env.NODE_ENV
  stage = stage === 'production' || stage === 'staging' ? stage : ''
  return `
<script src="${stage}${src}" type="module" crossorigin=""></script>
  `
}
