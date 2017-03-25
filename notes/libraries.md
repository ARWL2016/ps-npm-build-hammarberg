### Notes on Libraries 

[General Notes on NPM](npm.md)  
[Back to README](../README.md)

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