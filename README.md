# fe_mock_data_api

## Setup

If you're locally running the repo this will be used with, you should have everything you need already downloaded. All you should need to do to be able to run it locally is:
- clone it wherever you have your other repos
- `cd fe_mock_data_api`
- run `npm install` and `node app.js`. 

It is set up to run on a different port from other known projects. Please let me know if it's conflicting with anything else you're running and I can change it. (Although changing it on your local instance is easy too - line 5 of `app.js`.)

If you're interesting in developing against this server and want it to reboot on save to make that process easier, you'll want to start it with `nodemon app.js` instead of `node app.js`.