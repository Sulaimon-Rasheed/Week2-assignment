const path = require ('path')
const os = require('os')
const process = require('process')

// (1) To print out the present working directory
const cwd = path.resolve()
console.log(cwd)

// (2) To print out separator of a given file path
// const seperator = path.sep
// console.log(seperator)

// (3) To print out the extension name of a file path
// const extensionName = path.extname('C:\Users\USER\Desktop\live-class-assignment\Question-1\index.js')
// console.log(extensionName)

// (4) To print out the id of the current running process
// const id = process.pid
// console.log(`process ID: ${id}`)

// (5) To print out the user information of the os
// const userInfo = os.userInfo()
// console.log(userInfo)

// (6) To print out the platform of an operating system
// const platform = os.platform()
// console.log(platform)