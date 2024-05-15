This repo is a very small project developed on Node JS.

The main goal of this repo was to cover a coding challenge provided as part of a recruitment process.

This is a simple NodeJS server, using Express library to handle HTTP requests.
The API has two endpoints:
- `/` => the entrypoint => Just a welcoming message to confirm that the server is up.
- `/export` => the requested endpoint => On this endpoint we pull a HTML encoded in base64 and it just served to the requester. It is returning a HTML response.


In order to run the repo locally, you will need to have already installed NodeJs. For this specific application, I used Node v20. Feel free to install this version with your preferred Node Version Manager.

To install the packages required for the repo, you can run:
- `npm install` => to install the libraries and their dependencies
- `node server.js` => to run the NodeJS server.

The server will be accesible using the URL: http://localhost:3000/export


