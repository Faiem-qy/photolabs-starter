<h1 align="center"> Photolabs </h1>
PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts.
<br />
<br />

## About

- A user can view photos from the homepage loaded from the API.
- The user can navigate to different photo categories, also called topics.
- The user can click on a photo to view a larger version of the photo and relevant / similar photos.
- The user can like a photo from anywhere within the application where the photo is displayed.
- The user can view a heart icon with a notification in the navigation if there are liked photos.
- The navigation will consist of different topics and heart icon.
- The client-side application will make API requests to load and persist data (i.e. relevant data is not lost after a session restarts, so after a browser refresh).

#### Built With 

- Express
- Node.js
- JavaScript
- PostgreSQL
- SASS

## Create The DB

Login to PostgreSQL. 

Create a database with the command `CREATE DATABASE photolabs_development;`.

Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration.
The `node-postgres` library uses these environment variables by default.

``` 
PGHOST=localhost
PGUSER=(your username name here)
PGDATABASE=photolabs_development
PGPASSWORD=(your password here)
PGPORT=5432
```

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

### [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

### [Backend] Running Backend Server

Run a the development server with `npm start` in the Host environment. 

- Use the browser to navigate to `http://localhost:8001/api/debug/reset`.

```sh
cd backend
npm start
```


