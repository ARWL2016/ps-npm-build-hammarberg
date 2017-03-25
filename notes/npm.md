### Notes on NPM 

#### Built-in Scripts
- npm (run) test | tst | t
- npm (run) start 
- npm (run) stop 
- npm (run) restart - (if restart is not defined, npm will run stop and then start) 

#### NPM Miscellany  
- echo - prints a message to the console
- exit1 - signifies an error 
- -s - silent - reduces output (command line flag)
- `npm list -g --depth=0` - this will list globally install libraries from `C:\Users\Alistair\AppData\Roaming\npm`
- look in `node_modules/.bin` to find list of available commands from our modules  
- `npm run` will list available scripts in the console  

#### Windows Command Line 
- mkdir 
- cd 
- echo text > file.js - creates new with text
- dir - list current directory 
- dir node_modules - list a child directory 
- && - joins two commands but if the first exits, the second will not run 
- ; - joins two commands which will run whatever  

#### process.argv
- This is an array which captures arguments on the command line 
- E.g. if we enter `node index.js 5000` [0] will be the node executable, [1] will be index.js and [2] will be 5000

#### Pre and Post Hooks 
- Create a new script such as `pretest`, `posttest` (without hyphen)
- These will be hooked in automatically  
- They can also be run by themselves: `npm run pretest`  
- They also work for our custom scripts  

#### Chaining Commands 
- To run one command from another, just use `npm run command-name`  
- To run multiple commands, just use && - if the first errors out, the second will not run 

#### Piping Output 
- Example: "build:bundle": "browserify ./client/js/app.js | uglifyjs -mc > ./public/js/bundle.js"
- the | means send the output to stdout (a file where the process sends its output). This is then passed as the first parameter to the next process. The redirection operator > indicates an output file. We can also use this with echo to create a file.  

#### Passing an Argument to a Script 
- `"watch:test": "npm run test -- -w -R min"` This means, run the test script with these parameters. They will override the pre-existing parameters.  

#### Watching
- many libraries have a build in watch function: mocha, coffeescript, typescript - just add the -w flag to the script  
- in Mocha we can use the -w or --watch flag: `"watch:test": "mocha test -u bdd -R min --watch"`
- We can use the `watch` library to watch processes that don't have a built-ini watcher: `"watch:lint": "watch \"npm run lint\" ."`
- watchify goes with browserify. It takes flags such as -d (delay execution) and -v (verbose logging)
- watchify does not include uglify because this is only part of the build step
- we can also use the `watch` library for this: `"watch:bundleWatcher"`: "watch 'npm run build:bundle' client"` (quotes may need to be escaped)

#### Running Scripts Concurrently 
- `npm install npm-run-all --save-dev`
- `"watch": "npm-run-all --parallel watch:server watch:browser"`
- This is a Windows solution. Unix has the `&` operator 