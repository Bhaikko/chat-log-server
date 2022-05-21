# Chatlog Server
Chatlog server with endpoints to store messages on database

## Getting Started
### Server Setup
To install packages, 
```
    npm install
```
For the backend server using express as **Development** Server
```
    cd chat-log
    npm start
```
*Note: The build uses Sqlite as Database.*

### Database Setup
For setup of Database, **SQLITE MUST BE INSTALLED**
*Sequelize* as ORM is used for Database Management.

***For development build, use [SQLite Db Browser](https://sqlitebrowser.org/).***

If all the above steps are followed correctly, the development mode should be up and running. :)

## API Documentation
Postman was used to test endpoints
```
    POST /chatlogs/<userID>
        body: {
            message: String
        }
    Note: Timestamp related to message will be created by Database itself


    GET /charlogs/<userID>
        queryParams: {
            limit: number,
            start: number
        }

    DELETE /chatlogs/<userID>

    DELETE /charlogs/<userID>/<msgID>

```

_Example queries are provided below_ <br/>
[Example Queries](https://imgur.com/a/pbrQSnq)

## Folder Structure
```
.
    ├── chat-log
    │   ├── controller                         # Routes related to API
    │   ├── database                           # database initialiser and handlers
    │   ├── server.js                          # main server file containing server state
    │   └── ...   
    └──      
```
_Indiviual file description added on top of file itself_
