# Kiosk Sign-In App

## Non-functional Requirements

Technology | MEAN | Python Django | MEVN 
--- | --- | --- | --- 
Skills | 3.00 |  3.00 | 4.00
Features | 4.50 | 3.50 | 4.00
Constraints | 4.30 | 3.50 | 4.00
Usability | 4.50 | 4.00 | 4.00
Support / Community | 5.00 | 4.00 | 5.00
Security | 3.00 | 4.00 | 3.00
Complexity | 3.00  | 3.00 | 3.00
Average | 3.80 | 3.60 | 3.90

#### Framework Evaluation

After evaluating each framework carefully, the MEVN Stack was chosen for development mainly because the skillset matched with the project requirements. There were several other advantages with MEVN as follows. Javascript is a familiar language that offers great flexibility in terms of its applications and there is abundant technical support available on the internet. Vue.js has a lot of in-built features to add to the aesthetic value. Huge industries are now moving from relational database to NoSQl db like Mongo DB for better performance. Hence, MEVN stack became the ultimate choice.

#### Design

1. The Kiosk sign-in app requires a registration screen for users to sign up.

    [User Registration Screen] (https://github.com/janani1989/Kiosk-app/blob/master/images/UserRegistration.png)

2. The Admin View requires authentication.

    2.a) Admin registration

    [Admin Sign-Up Screen] (https://github.com/janani1989/Kiosk-app/blob/master/images/AdminRegister.png)

    2.b) Admin Login

    [Admin Authentication Screen] (https://github.com/janani1989/Kiosk-app/blob/master/images/AdminRegister.png)

3. The Admin View showing all users.

    [Admin View Screen] (https://github.com/janani1989/Kiosk-app/blob/master/images/AdminView.png)


## Installation Instructions

## Virtual Box Setup Instructions
The instructions to execute the app assume an Ubuntu environment.

## Getting started with VirtualBox
Fork the repo then clone it to your local machine.
```
git clone https://github.com/<your username>/kiosk-app.git
```

Change your directory into the dir on your VirtualBox Ubuntu virtual machine.  
```
cd kiosk-app
```

Create .env file. Add a `.env` file with your PORT, MONGO_URI, like below:

```
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/kiosk-app
APP_URL=http://127.0.0.1:3000/
```


### Install and run everything

- `install.sh` installs the required packages to run the Kiosk-App.
- `init-db.sh` starts the database(mongodb) engine service.
- `run-backend.sh` executes the app itself by running server.js file.
- `run-frontend.sh` executes the `npm run serve` command for monitoring changes as the app is live.

```bash
$ ./bin/install.sh &
$ ./bin/init-db.sh &
$ ./bin/run-back-end.sh &
$ ./bin/frun-front-end.sh &
```


Open a new terminal window and navigate to kiosk-app.  

Open http://localhost:3000 in any web browser.

## Architecture

This web-application is based on a client-server architecture. The client is usually a browser accessed from end user's device like mobile phone, tablet, laptop, desktop etc.
The front-end server is responsible for rendering the app to the user. The broswer sends HTTP requests to the front-end or Application server and gets back HTTP response to render a page.
The application server communicates with the back-end server which has the business logic to retrieve data from the database. The application server and the backend server exchange json objects for serving requests and providing response. The Backend server communicates with the data store or database, which in this case is mongodb, a NoSQL database to extract user requested information.

## Plan of Action

The app is built based on Agile software development methodology. Each phase of software development life cycle like Requirements Elicitation, Design, Development, Testing and Deployment was followed. Please find below the tasks completed on this project.

- [x]   Non-functional Analysis
- [x]   Architecture design
- [x]   Implementation
- [x]   Unit Testing
- [x]   Test Deployment

