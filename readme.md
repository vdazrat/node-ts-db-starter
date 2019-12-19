# Boilerplate for objection, knex and typescript

## Installation
```
npm install
```
You need to have docker installed
[https://docs.docker.com/v17.09/docker-for-mac/install/](https://docs.docker.com/v17.09/docker-for-mac/install/)

## Start the db

  

Open a new terminal tab and run:

  

```

npm run db:start

```

  

## Create a new table

  

```

npm run db:createMigration create_user

```

  

Doing so would create a migration file in database/migrations.

  

Update the up and down objects to define the creation and rollback operations respectively.

  

## To run latest migration

```

npm run db:migrate

```

  

## To rollback last migration

```

npm run db:rollback

```

  
## View the database in adminer
After running the db
Login to adminer http://localhost:8081/



## Project structure

```

config # configuration related stuff

src

│ server.ts # App entry point

└───database # Contains migrations and db related code

└───models # Database models

└───domain # Domain level entities

└───entities # Interfaces for domain entities

└───services # All the business logic is here

```
