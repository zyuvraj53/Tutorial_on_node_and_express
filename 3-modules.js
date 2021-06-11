//CommonJS - every file is module by default
//Modules - Encapsulated Code (only share minimum)


//always start the file name with a 
//dot
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alt-syntax')
require('./7-mind-grenade')

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)