# QuizApp

## Usage
```sh
bundle install
npm install
# Set the database password, Facebook App ID, Facebook app secret and secret key in config/secrets.yml as in the example config/secrets.yml file
rake db:setup
foreman start -f Procfile.dev
```

The Quiz app will open on `localhost:3000` and the admin user can login from `http://localhost:3000/admins/sign_in`. 

## Gameplay
* Registration and Login for Users(along with support for **Facebook Login**).
* Support for **Admin Users**.
* Multiple genres and subgenres of quizzes can be added.
* There can be various ​kinds​ ​of​ ​question​s like single choice, multiple choice correct, question with images and/or audio.
* Each quiz fetches its questions in a random fashion from the question database of that subgenre one at a time.
* Each quiz is **state-restoring**, that is, the user is able to pause the game at any given moment of time and continue the quiz later when he/she wants to. 
* There is support for **powerups** like skip this question and double tries for a question that can be used once in a quiz.
* There is a leaderboard​ ​for​ ​the​ ​users​ in each genre and each sub-genre.
* The admin​ interface has a separate page with access to all the questions and leaderboard data. It also has access to the data of the user profiles.