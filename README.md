# angular-6-registration-login-example-cli

This module does registration and login. It has front end as Angular 6 and backend
as Node js. We are using Mongodb as the database for this application.

This whole project is divided into two segments one is client folder and other one is
the server folder. 
Client folder has the basic architecture of the normal Angular cli. 
Server folder has the node js code with server abd app js to be the main folders.
Moongoose is the ORM used for the mongodb and the node

Client : 
1. Install node js version > 8.0.0
2. Install @angular/cli
3. Run npm install
4. Run ng serve-open
5. Project starts running at port 4200.

Server :
1. Install node js version > 8.0.0
2. Run npm install
3. Run npm start
4. Project starts running at port 4000.

MongoDb : 
1. Start the mongodb server before starting the node server.

API : 
1. '/users/register' : POST  --> Registering the username, firstname, lastname, password. --> Body {
	"firstName": "Ankit",
	"lastName": "Kumar",
	"username": "anki495",
	"password": "my-super-secret-password"
}
2. '/users/authenticate' : POST --> Login using the username and the password. --> Body {
	"username": "anki495",
	"password": "my-super-secret-password"
}
3. '/users/' : GET --> Get all the list of users present in the Mongodb.
4. '/users/:id' : POST --> Delete the particular id.
