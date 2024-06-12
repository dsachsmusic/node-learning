/* node setup https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl 
 (to run node, connect to Ubuntu instance on WSL, via VS Code Remote Connect) */


/* import modules (or functionality(?)) into a constant */
/* example fs is used for managing the file system  */
const fs = require('fs')

/*by the way, const vs let....const is immutable, let is mutable*/
/*fs has a method (?), readdir....
...the method readdir requires a callback function...
...callback functions are common / the norm (?) in node (and javascript?)
......it has something to do with asynchronous...processing?  ...a function runs, without blocking other functions from running
.........so, callback functions are...added to functions(?) for calling for the results (or error) from a function, when its done/whenever(?)
.............not sure how this differs from parallel processing/threads, etc. 
...the code below, the method readdir requires a path, and then, a call back function....
......I guess the callback function syntax is (err, results), where results can be any variable name - it holds the results...
.........and the call back function exists within the parameters of the readdir function call.
.............then, after the function call, we have a ; and then, a loop oveer the results (files)
... =>, I think, is just a shorthand way for defining a function (on the fly?)
*/
fs.readdir('/home', (err, files) => {if (err){console.log('beware, there be an err',err);return;}; for (const file of files) {console.log(file)}})
/* another syntax, for the foreach part above, would be as follows, where file is...the iterator?  so to speak(?)*/
files.forEach(file => {console.log(file)})


