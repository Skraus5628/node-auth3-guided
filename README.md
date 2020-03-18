# Using JSON Web Tokens (JWT)

Guided project for **Node Auth 3** Module.

## Prerequisites

- [DB Browser for SQLite](https://sqlitebrowser.org) installed.
- A rest client like [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type`npm install` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor adds support for `JSON Web Tokens (JWT)` to the API.

<!-- Flow
--Client sends credentials to server
--Server verifies credentials
--Server creates a JWT for client
--Server sends back the JWT as a header
--client stores the JWT in local storage
--client sends JWT on every subsequent request
--server verifies the JWT is valid (no state required)
--server provides access to resource (or not)
 -->


<!-- Responsibilities of server 
--Produces the JSON web token
-- Sends the token to the client
-- Decoding and verifying token
-->


<!-- Responsibilities of client
-- Stores the JSON web token
--Sends the token on every request
--Deleting the token on logout
 -->


<!-- JSON Web Token
has 

header.payload.signature

header:
base64({
    algorithm "HS256",
    type: "JWT"
}) 


payload:(claims)
base64({
    membershipId: 12345
    acceslevel: "basic"
    })
    
    signature:
    hash(header + payload + secretString)
    -->

    npm installed jsonwebtoken and cookie-parser
    