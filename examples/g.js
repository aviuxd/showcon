var Glob = require("../").Glob

var pattern = "../svg/*.svg"
console.log(pattern)

var mg = new Glob(pattern, {mark: true, sync:true}, function (er, matches) {
  console.log("matches", matches)
})
console.log("after")
