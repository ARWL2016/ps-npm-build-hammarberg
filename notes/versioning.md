##Versioning 

- `npm version` will output information about the current application, node and npm, the V8 etc. 
- `npm version major | minor | patch` will increment the application version number in package JSON 

#### Git 
https://www.gitignore.io/ - generates a .gitignore for node 

#### Deployment 
- deployment scripts such as Heroku create can also be added to npm scripts  
`Heroku create` generates an extra git remote repository at git.heroku.com
`git push heroku master` will then deploy the site 
- before deployment, we should add an engines key to package json which gives the node and npm version number