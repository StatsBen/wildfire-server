# wildfire-server

A lil' node server that can be spun up locally to serve wildfire data

## Installing the database

1. Download the dataset here: https://www.kaggle.com/rtatman/188-million-us-wildfires/version/1
2. create a `database` directory within the `src` directory.
3. Extract the wildfires database, name it `db.sqlite`, and put it in the `database` directory.

Or, if you like to improv, just make sure that the `DB_PATH` variable in `database/db.js` matches the path to where you've downloaded the dataset... And download it from the right place!

## Running the server

`npm run go` (and you may have to run `npm install` as well... _maybe..._)

## Dev Mode

To increase the amount of console logging that happens, go into the `db.js` file and ensure that `DEV_MODE` (should be near the top somewhere) is set to `true`. (And of course set it to fasle if you're sick of the console blowing up...).
