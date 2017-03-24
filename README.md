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
---
### Notes on NPM 
- `npm list -g --depth=0` - this will list globally install libraries from `C:\Users\Alistair\AppData\Roaming\npm`

#### Built-in Scripts
- npm (run) test | tst | t
- npm (run) start 
- npm (run) stop 
- npm (run) restart - (if restart is not defined, npm will run stop and then start) 

#### Commands 
- echo - prints a message to the console
- exit1 - signifies an error 

#### Windows Command Line 
- mkdir 
- cd 
- echo text > file.js - creates new with text
- dir - list current directory 
- dir node_modules - list a child directory 
- && - joins two commands but if the first exits, the second will not run 
- ; - joins two commands which will run whatever  

#### NPM Command Line Flags 
- -s - silent (reduces output)

#### Notes
- look in `node_modules/.bin` to find list of available commands from our modules 

#### process.argv
- This is an array which captures arguments on the command line 
- E.g. if we enter `node index.js 5000` [0] will be the node executable, [1] will be index.js and [2] will be 5000

#### Pre and Post Hooks 
- Create a new script such as `pretest`, `posttest` (without hyphen)
- These will be hooked in automatically  
- They can also be run by themselves: `npm run pretest`  
- They also work for our custom scripts  

#### Combining Commands 
- To run one command from another, just use `npm run command-name`  
- To run multiple commands, just use && - if the first errors out, the second will not run

---
### Notes on Libraries 

#### Mocha 
- command line flags: https://mochajs.org/#usage 
- u - user interface (bdd | tdd)
- R - reporters (spec | list)

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
