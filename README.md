# How to deploy to Heroku
1. Download the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
2. Login to your Heroku account using the Heroku cli
3. In `brettoberg--Front-End` bundle the front-end code into brettoberg--prod. `ng build --prod --output-path ../brettoberg--prod/dist`
3. In `brettoberg--prod` stage a commit
4. Run `git push` in `brettoberg--prod` and heroku will deploy the application 