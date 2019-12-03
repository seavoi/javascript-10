Treehouse JavaScript // Project 9: REST API

Sean Voigts (https://teamtreehouse.com/projects/rest-api)

## Greetings

## Task list:

  - ~~Remove sequilize and reinstall and configure with CLI~~ *Done! What a mess!* 

**Lee's Review**

  - ~~When I run the Create User test on the /users POST route I get a 401 error with an "Access Denied" error. It looks like you are trying to authenticate the user here but that isn't necessary or possible here since you are creating a new user.~~ *Done!*

  - ~~The Get Courses and Get Course tests are working great but I would suggest returning more user info than just userId. While that works within the requirements of this project since it doesn't specify what user info is returned, some of that extra info will come in handy in the next project when you build out a front-end for this application.~~ *Done!*

  - ~~The Incomplete Data tests are working perfectly for the /courses POST and PUT route but I can't test the /users POST because of the authentication issue mentioned earlier so be sure to double-check this one that other issue is fixed.~~ *Done!*


**User Routes**

  - ~~Location for create users~~ *Done!*


**Course Routes**

  - ~~GET courses missing user owner **GETING ERROR: "SequelizeEagerLoadingError: User is not associated to Course!"**~~ *Done!* *Returning UserId from the Course model is good!*

  - ~~GET courses/:id missing user owner~~ *Done!* *Returning UserId from the Course model is good!*

  - ~~POST/PUT/DELETE user authentication **Bug** When I get an authentication failure the requested route still runs which isn't ideal~~ *Done!*

  - ~~Location for create courses~~ *Done!*


**Password**

  - ~~POST users route doesn't hash user's password~~ *Done!*


**Permissions**

  - ~~Missing Express middleware to authenticate one more of the specified routes~~ *Done!*

  - ~~When authentication fails a 401 status code isn't retured~~ *Done!*






{
    "firstName": "Tess",
    "lastName": "Terrill",
    "emailAddress": "tess@terrill.com",
    "password": "tesspassword"
}

{
  "userId": 3,
  "title": "Art History 101",
  "description": "Paintings and sculptures - oh my."
}
