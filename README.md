## NPM Scripts as a Build Tool (Hammarberg, PS: 2015)

https://app.pluralsight.com/player?course=npm-build-tool-introduction&author=marcus-hammarberg&name=npm-build-tool-introduction-m2&clip=2

#### Featured Libraries 
- Mocha 2.3.2
- Should 7.1.0
- Koa 1.0.0 http://koajs.com/#introduction (now on 2.2.0 with breaking changes)
- Supertest 1.1.0  (now 3.0.0 with a simpler setup)
- JSHint 2.9.4 (latest)

### Notes on NPM 

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

