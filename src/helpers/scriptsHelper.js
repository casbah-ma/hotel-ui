const fs = require('fs')

//function to get the multi entries
const getEntries = (entry) => {
  const entries = {}
  const dirs = fs.readdirSync(entry)

  dirs.forEach((dir) => {
    const path = `${entry}/${dir}`
    if (fs.lstatSync(path).isDirectory()) {
      entries[dir] = path
    }
  })
  return entries
}

module.exports = { getEntries }
