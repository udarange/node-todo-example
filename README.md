# node-todo-example
Node.js todo-example

## technology stack

* nodemon       // automatically restart the server
* dotenv        // env file
* body-parser   // deprecated
* express
* mongoose
* morgan        // log all requests


When Express 4.0 was released they decided to remove the bundled middleware from Express and make them separate packages instead. 
The syntax then changed from app.use(express.json()) to app.use(bodyParser.json()) after installing the bodyParser module.
bodyParser was added back to Express in release 4.16.0, 
That means you don't have to use bodyParser.json() anymore if you are on the latest release. You can use express.json() instead.
