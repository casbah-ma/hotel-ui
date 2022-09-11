// const {getEntries} = require('./utils')
const fs = require('fs')
const { getExportsEntries } = require('./scriptsHelper')

const components = Object.keys(getExportsEntries('src/components'))
let nestedComponents = []
let outputs = []
const multiexports = [
  'Blogs',
  'Bookings',
  'Cards',
  'Forms',
  'Heros',
  'Icons',
  'Swipers',
  'Masonries',
  'Navbars',
  'Inputs',
  'Footers',
  'CategoriesFilters',
  'Explores',
]

components.forEach((component) => {
  if (component.includes('/')) {
    component.split('/')[1] !== 'index.js' &&
      outputs.push(
        `export {default as ${component.split('/')[1]}} from './${component}'`
      )
  } else if (multiexports.includes(component)) {
    outputs.push(`export * from './${component}'`)
  } else outputs.push(`export {default as ${component}} from './${component}'`)
})

fs.writeFile(
  'src/components/index.js',
  outputs.join('\n'),
  (error) => error && console.log(error)
)
