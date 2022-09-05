// const {getEntries} = require('./utils')
const { log } = require('console')
const fs = require('fs')
const { getEntries } = require('./scriptsHelper')

const components = Object.keys(getEntries('src/components'))
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
]

console.log('components', components)
components.forEach((component) => {
  if (multiexports.includes(component)) {
    outputs.push(`export * from './${component}'`)
  } else outputs.push(`export {default as ${component}} from './${component}'`)
})

fs.writeFile(
  'src/components/index.js',
  outputs.join('\n'),
  (error) => error && console.log(error)
)
