// const {getEntries} = require('./utils')
const fs = require('fs')
const { getEntries } = require('./scriptsHelper')

const components = Object.keys(getEntries('src/components'))
let outputs = []
const multiexports = ['Cards', 'Forms', 'Heros', 'Icons']
components.forEach((component) => {
  if (multiexports.includes(component))
    outputs.push(`export * from './${component}'`)
  else outputs.push(`export {default as ${component}} from './${component}'`)
})
fs.writeFile(
  'src/components/index.js',
  outputs.join('\n'),
  (error) => error && console.log(error)
)
