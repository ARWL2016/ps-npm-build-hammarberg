## NPM Scripts as a Build Tool (Hammarberg, PS: 2015)

https://app.pluralsight.com/player?course=npm-build-tool-introduction&author=marcus-hammarberg&name=npm-build-tool-introduction-m2&clip=2

#### Featured Libraries 
- Mocha 2.3.2
- Should 7.1.0
- Koa 1.0.0 http://koajs.com/#introduction (now on 2.2.0 with breaking changes)
- Supertest 1.1.0  (now 3.0.0 with a simpler setup)
- JSHint 2.9.4 (latest)
- Coffeescript and Typescript - compile script and folder structure  
- rimraf@2.4.3 - recursive folder clean out for windows  
- Less 
- Browserify 
- Uglify-js 2.8.15 (latest) 
- Watch - watches linting 
- Watchify - partners with Browserify to watch files and rebundle  
- Nodemon 1.11.0 
- Live-reload 1.1.0 (hot reloading)
---
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

---
### Notes on Libraries 

#### Mocha 
- command line flags: https://mochajs.org/#usage 
- u - user interface (bdd | tdd)
- R - reporters (spec | list)
- Note that the test suite will run the application. When running test watch, it is important not to start the app again. This will throw an error. See index.js for a possible solution.  

#### JSHint 
- Note that Windows does not seem to supprt wildcards as jshint parameters 
- specific files or folders can be given: `"lint": "jshint index.js test/ "`
- JSHint Config can be done inside package.json or `.jshintrc`
- Note that if linting finds an error, it will cease execution with exit code 1  
- --exclude file | folder 

#### Coffeescript 
- the original is kept in `src/coffescript` 
- the output goes to `lib` - but why, when it is not 3rd party code?  
- `"compile:coffee": "coffee --compile --output ./lib ./src/coffeescripts"`  

#### Typescript 
- works as coffeescript but the compile command specifies module type and uses --outDir instead of --output
- `"compile:ts": "tsc --outDir ./lib --module commonjs ./src/typescripts/tsCode.ts"`
- cleaning out the output file with rimraf helps to verify the compile step

#### Less
- install less GLOBALLY: `npm install -g less`
- run `lessc client/less/demo.less public/css/site.css` - lessc src target
- to compile multiple files, have a single index file which imports everything: `@import "base.less"` etc 

#### Browserify http://browserify.org/ 
- install globally (according to Browserify docs) 
- `"browserify ./client/js/app.js -o ./public/js/bundle.js"`
- Note that the file structure needs to exist before running the build

#### Uglify-js 
- installed locally (but global install possible)
- pipe output from Browserify `"build:bundle": "browserify ./client/js/app.js | uglifyjs -mc > ./public/js/bundle.js"`

#### Nodemon 
- install locally 
- `"watch:server": "nodemon index.js"` - this will restart the server when a change is made to this file
- `--ignore client` - this flag can be used to exclude for example source files that need compiling  

#### Live-reload 
- install locally 
- `"watch:browser": "live-reload --port 9091 public/"`. Live-reload will watch a folder for changes and then reload the page
- This is used in parallel with the nodemon process which watches index.js: `"watch:server": "nodemon --ignore client --ignore public index.js"`
- Use `npm-run-all` module for concurrency: `"watch": "npm-run-all --parallel watch:server watch:browser"`
- Summary: nodemon watches and restarts the server while live-reload watches the bundle 

#### Summary of Compound Watch Script
1. There are 4 concurrent tasks for test, bundle, server and browser-reload 
2. watch:test runs mocha in watch mode 
3. watch:bundle runs a plain version of the browserify build without uglify-js (minification). It does this using watchify.  
4. watch:server uses nodemon to watch the index.js for changes
5. watch:browser watches the public folder (bundle and css) and reloads the page  
6. Note that this sequence apparently excludes the less files. But if they are rebuilt, the output change would trigger live-reload