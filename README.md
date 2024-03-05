# GeoGuessing Game

This front-end MVP designed by Irene Zatti is a guessing interactive game app where the user can generate
random pictures and then guess where the photos have been taken.
The user can enter either the specific city name or the country name
to receive points. The main feature added is Authentication and Authorization.

## Build With

- React (^18.2.0)
- React Router (^6.22.1)
- Axios (^1.6.7)
- HTML5
- CSS3
- JavaScript (ES6)
- Google Places API
- Node.js (20.4.0)
- Express.js (4.16.1)
- MySQL (^2.18.1)
- MySQL (3.9.2)
- Sequelize (^6.37.1")

## Setup

### Dependencies

Run `npm install` in the project folder to install dependencies related to Express (the server). Check if the following dependencies are installed, otherwise install with the commands in the parenthesis:

- Express.js (`npm install express`)
- Nodemon (`nnpm install -g nodemon`)
- Sequelize (`npm install sequelize mysql2`)

Type `cd client` in the terminal and run `npm install` install dependencies related to React (the client). Check if the following is installed:

- React Router (`npm install react-router-dom`)
- Axios (`npm install axios`)

To install the React Google Maps API after you get your key, please run `npm install @react-google-maps/api`. More information about this process can be found [here](https://www.npmjs.com/package/@react-google-maps/api).

### Database Prep

[database](db.png)

Create `.env` file in project directory and add

```
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=geoguessing
  DB_PASS=YOUR_PASSWORD
  SUPER_SECRET=YOUR_PASSWORD
```

(replace `YOUR_PASSWORD` with your actual password and `YOUR_EMAIL` with your email address)

Type `mysql -u root -p` in the terminal to access MySQL and type your password.

In the MySQL terminaL, type `CREATE database geoguessing;` to create a database in MySQL.

Run `npx sequelize-cli db:migrate` in your terminal in the project folder. This will create 2 tables, the userss and the gameresults.

### Development

- Run `npm start` in project directory to start the Express server on port 5000
- `cd client` and run `npm run dev` to start client server in development mode with hot reloading in port 5173.

### APIs

To properly access the app, please create a `.env` file in the src folder on your client side.
Then, add your Google Maps API key.
You can get or find your `Google Maps API KEY` by following the steps [here](https://developers.google.com/maps/documentation/javascript/get-api-key).
