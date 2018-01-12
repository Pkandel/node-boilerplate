### To run in development mode
 
>  make sure the mongodb is running
 ```
 sudo mongod  
 
 ```
> run the project (without docker)
```	
  npm run dev 

```		
> run the project (with docker)
```
   docker-compose up 

 ```

> run in production 
```
   npm run prod

 ```

 ### To run the project in debug mode
 ```
   npm run debug
```
> Then the chrome will automatically open the debug window, if not navigate to chrome://inspect and select the node devtools.
#### chrome inspector 

![chrome-inspector](https://github.com/Pkandel/note-taking-apps/blob/component/backend/backend/public/img/chrome-inspector.png)

#### chrome dev tool window
![chrome-dev-tools](https://github.com/Pkandel/note-taking-apps/blob/component/backend/backend/public/img/dev-window.png)

#### Urls
 * http://localhost:8000/api - backend url 
 * http://localhost:8000/spec/ -swagger api
