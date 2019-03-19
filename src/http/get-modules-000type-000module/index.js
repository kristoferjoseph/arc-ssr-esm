const join = require('path').join
const rollup = require('rollup')
const Terser = require('terser')

exports.handler = async function http (req) {
  let type = req.params.type
  let module = req.params.module
  console.log('MODULE', type, module)
  let requested = join(__dirname, 'node_modules', '@architect', 'views', 'modules', type, module)
  try {
    let bundle = await rollup.rollup({
      input: requested
    })
    let bundled = await bundle.generate({
      format: 'esm'
    })
    let { output } = bundled
    let out = output[0]
    let { error, code } = Terser.minify(out.code)
    if (error) throw error
    let body = code

    return {
      type: 'text/javascript; charset=utf8',
      body
    }
  } catch (err) {
    return {
      type: 'text/plain; charset=utf8',
      status: 404,
      body: `File ${requested} not found.`
    }
  }
}
