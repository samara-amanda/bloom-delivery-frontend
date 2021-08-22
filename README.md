# Bloom Delivery 
A mock Venus Et Fleur, flower delivery e-commerce site.

An MVP SPA React/Redux Frontend application with a Rails API backend that demonstrates Client-Server Communication and uses:

React
- Implements ES6 Features
- Uses Redux middleware to respond to and modify state change
- Makes use of async actions and redux-thunk middleware to send data to and receive data from a server
- Handles the display of data with minimal data manipulation

Rails
- Rails Models/Controllers and RESTful conventions
- Serializers
- Sql
- ActiveRecord
- Rails API handles the data persistence with a database. Uses fetch() within actions to - - GET and POST data from API
- ORM - Object Relational Mapping between Models
    i. belongs_to
    ii. has_many
- The following CRUD functionality:
    i. Create
    ii. Read
    iii. Update
    iv. Delete

# Install Instructions
Rails Backend:
- Here is a link to my Rails API Backend to clone.
- Run 'bundle install'
- Run 'rake db:migrate' # migrates the tables into the database
- Run 'rake db:seed' # migrates seed file containing initial data to test the application with
- Run the server with 'rails s'. Click here to see the JSON view of the recipe objects and their associations to reviews.

React Frontend:
- Clone this repo.
- npm install
- npm start
- visit http://localhost:3001

# License
This application is available as open source under the terms of the MIT License.