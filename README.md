# Guess Game
This front-end MVP is a guessing interactive game app where the user can generate 
random pictures and then guess where the photos have been taken.
The user can enter either the specific city name or the country name
to receive points.

## Build With
- React (^18.2.0)
- HTML5
- CSS3
- JavaScript (ES6)
- Google Places API
- Node.js (20.4.0)
- Express.js (4.16.1)

## Setup
### Node.js
To access correctly this project, ensure to have Node.js correctly installed.
Run `node -v` in your terminal to check your Node.js version. If Node.js is not installed,
you can do so [here](https://nodejs.org/en).

### Dependencies
- Run `npm install` in the project directory. This will install server-related dependencies, such as `express`.
- `cd client` and run `npm install`. This will install client dependencies, in this case, React.
- To install the React Google Maps API after you get your key, please run `npm install @react-google-maps/api`. More information about this process can be found [here](https://www.npmjs.com/package/@react-google-maps/api).

### Development
In your terminal, navigate to the `client` directory by running `cd client`.
Then, run `npm run dev` to start the client in development mode with hot
reloading in port 5173.

### APIs
To properly access the app, please create a `.env` file in the src folder on your client side.
Then, add your Google Maps API key.
You can get or find your `Google Maps API KEY` by following the steps [here](https://developers.google.com/maps/documentation/javascript/get-api-key).
