# Royce API

## Introduction: 
This document describes design decisions and operation steps for the Royce API

## System Overview: 
The RESTful API was created so it can `create/read/update/delete` user data from a persistence store in Node.js (as requested) using Express and several other libraries to facilitated entity modeling, validations, and operations. For persistence store was use a PostgreSQL DB which is known for reliability, feature robustness, and performance and from the node side, Sequelize as an ORM.

## Design Considerations: 
I used a standard CRUD approach from a RESTful perspective and a DAO pattern to separate the DB from the rest of the app, using an ORM to handle data between Node and the DB. Also, I structured the project based on self-contained components and low complexity to facilitate its growth and expansion.

## Architecture:
 ![Imgur](https://imgur.com/QBfUDE9.jpg)
 
Additionally, the App was containeraized with docker and compose with a PostgreSQL DB.

## Libraries Used:
    @joi/date: 2.1.0
    dotenv: 10.0.0
    express: 4.17.1
    helmet: 4.6.0
    joi: 17.4.0,
    moment: 2.29.1,
    pg: 8.6.0,
    sequelize: 6.6.2

# Deploy:
## Pre requisites:
Docker

GIT

## Deployment steps:
After pulling the project from the repository, open a command line from the project's folder and execute:
```
docker build --pull --rm -f "Dockerfile" -t node-roycechallenge:latest "."
``` 

Once it finished without errors, execute the following command:
```
docker-compose up
```
(Also, you can use -d for running the containers in the background)

Servers will be up whent the DB server shows:
```
LOG:  database system is ready to accept connections
```
and Node:
``` 
Server running at: http://0.0.0.0:5000
```

### Additional Information:
Within the repo is included the app's swagger and a postman collection for testing purposes.
