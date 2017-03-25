##Versioning 

- `npm version` will output information about the current application, node and npm, the V8 etc. 
- `npm version major | minor | patch` will increment the application version number in package JSON 

#### Git 
https://www.gitignore.io/ - generates a .gitignore for node 

#### Deployment 
- deployment scripts such as Heroku create can also be added to npm scripts  
- `heroku create` generates an extra git remote repository at git.heroku.com
- `heroku create name` - will specify the subdomain name
- `git push heroku master` will then deploy the site 
- before deployment, we should add an engines key to package json which gives the node and npm version number
- avoid prestart and poststart scripts when deploying
- to rename an app on heroku and change the subdomain name: `heroku apps:rename newname`