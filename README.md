## NPM Scripts as a Build Tool (Hammarberg, PS: 2015)

https://app.pluralsight.com/player?course=npm-build-tool-introduction&author=marcus-hammarberg&name=npm-build-tool-introduction-m2&clip=2

#### Featured Libraries 
- Mocha 2.3.2
- Should 7.1.0
- Koa 1.0.0 http://koajs.com/#introduction (now on 2.2.0 with breaking changes)
- Supertest 1.1.0  (now 3.0.0 with a simpler setup)

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

#### Notes
- look in `node_modules/.bin` to find list of available commands from our modules 

#### process.argv
- This is an array which captures arguments on the command line 
- E.g. if we enter `node index.js 5000` [0] will be the node executable, [1] will be index.js and [2] will be 5000

#### Mocha 
- command line flags: https://mochajs.org/#usage 
- u - user interface (bdd | tdd)
- R - reporters (spec | list)