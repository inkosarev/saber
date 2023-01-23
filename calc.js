const math = require('mathjs')
if (!process.argv[2]) return
console.log(math.simplify(process.argv[2]).value)
