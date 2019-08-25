# wildfire-server

A lil' node server that can be spin up locally to serve wildfire data

## Installing the database

1. Download the dataset here: https://www.kaggle.com/rtatman/188-million-us-wildfires/version/1
2. create a `database` directory within the `src` directory.
3. Extract the wildfires database, name it `db.sqlite`, and put it in the `database` directory.

Or, if you like to improv, just make sure that the `DB_PATH` variable in `server.js` matches the path to where you've downloaded the dataset... And download it from the right place!

## Running the server

`npm run go` (and you may have to run `npm install` as well... _maybe..._)
