# Potluck Planner Backend


Backend implementation of build week

Expat Journal Back-end API Information
API: https://potluckplanner-bw.herokuapp.com/

## REGISTER AND LOGIN

Type Endpoint Function Requisites

POST /register registers a user requires a first name, last name, username, and password
POST /login logs a user in requires a username and password returns an authorized token.

### User Endpoint Function
GET /users returns a list of all users
GET /users/:id returns a specific user by id
PUT /users/update/:id allows specific user to be edited
DELETE /users/delete/:id allows user to be delted
GET /users/logout allows user to logout

### Potluck Endpoint Function
GET /potlucks returns a list of all potlucks
GET /potlucks/:id returns a specific potluck by id
POST /potlucks adds new potluck
PUT /potlucks/:id updates specific potluck by id
DELETE /potlucks/:id deletes specific potluck by id
