const { log } = require('console')
const fs = require('fs')

//function to get the multi entries
const getEntries = (entry) => {
  const entries = {}
  const dirs = fs.readdirSync(entry)

  dirs.forEach((dir) => {
    const path = `${entry}/${dir}`
    if (dir === 'Icons') {
      const icons = fs.readdirSync(path)
      icons.forEach((icon) => {
        const iconPath = `${path}/${icon}`
        const iconPathName = icon.replace('.jsx', '')
        entries[`${dir}/${iconPathName}`] = iconPath
      })
    }
    if (fs.lstatSync(path).isDirectory()) {
      const directories = fs.readdirSync(path).filter((dirent) => dirent)
      directories.forEach((directory, i) => {
        if (fs.lstatSync(`${path}/${directory}`).isDirectory()) {
          entries[directory] = `${path}/${directory}`
        }
      })
      entries[dir] = path
    }
  })

  return entries
}

// its the same as getEntries but it returns the path of the files
const getExportsEntries = (entry) => {
  const entries = {}
  const dirs = fs.readdirSync(entry)

  dirs.forEach((dir) => {
    const path = `${entry}/${dir}`
    if (dir === 'Icons') {
      const icons = fs.readdirSync(path)
      icons.forEach((icon) => {
        const iconPath = `${path}/${icon}`
        const iconPathName = icon.replace('.jsx', '')
        entries[`${dir}/${iconPathName}`] = iconPath
      })
    }
    if (fs.lstatSync(path).isDirectory()) {
      const directories = fs.readdirSync(path).filter((dirent) => dirent)
      directories.forEach((directory, i) => {
        if (fs.lstatSync(`${path}/${directory}`).isDirectory()) {
          entries[`${dir}/${directory}`] = `${path}/${directory}`
        }
      })
      entries[dir] = path
    }
  })

  return entries
}

module.exports = { getEntries, getExportsEntries }
