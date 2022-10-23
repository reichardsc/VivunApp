Tutorial
--------
- [Hasura GraphQL Endpoint](https://cloud.hasura.io/public/graphiql?header=content-type:application/json&endpoint=https://vivunapp.hasura.app/v1/graphql)

Tech stack
----------
- Frontend
    - React v17.0.2
    - Apollo/client: v3.4.16
    - Auth0/auth0-react v1.12.0
    - Graphql v15.7.1

  Backend
    - Hashura 
        - PostgreSQL 
        - GraphQL

  Auth
    - Auth0

Purpose
--------
To demonstrate my ability to make a full stack application while choosing from the list of technologies in the JD.

What I Learned
--------------
Every one of the tools used is almost entirely new to me. So this was a good introductary exercise into some of these tools.

Hasura doesn't like it when you capitalize tables/columns in the database. It breaks when you try to make a view or a join.
Hasura is a very powerful tool that can make quick POC applications easy.
When using Hasura 
    you must include your x-hasura-admin-secret in the header of your link or it wont work;
        or set the configurations in Hasura to not require auth for the api calls.


What I also did, but did not include
-------------
At first I tried starting a kotlin - react app with springboot, but once I got Hasura running and learned apollo, this seemed unneeded. I might do this entirely in Kotlin as a dev exercise at some point.

Reference Objects
------------------
Customer { Customer_Id: Int, FirstName: String, LastName: String}
Product {Product_Id: Int, Name: String, Price: Int}
Sale {Sale_Id: Int, Customer_Id: Int, Product_Id: Int}


What does it do
-------------
1. Login authentication via Auth0
2. Hasura is integrated with Github to automatically deploy metadata and migrations.
3. Hasura creates the API, Connections to a Database (PostgreSQL), and will even let you make database changes.
4. React front end ui allows for CRUD functionality of the Product table as well as making a Sale and viewing total sales per customer.
5. Apollo tool makes integrating the react front end with Hasura very easy by simplifying the API calls.

Optional
--------
I also set up my local machine with docker to run an instance of the hasura console which also can push and make changes to the 
metadata and migrations. This is what exists in the Hasura folder.

Links
--------
- [Hasura GraphQL Endpoint](https://cloud.hasura.io/public/graphiql?header=content-type:application/json&endpoint=https://vivunapp.hasura.app/v1/graphql)
- [Hasura GraphQL Intro to with React](https://hasura.io/learn/graphql/react/introduction/)


Run the React app
-----------------
npm install react-scripts --save
yarn start
