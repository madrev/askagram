# Askagram

[Askagram Live][heroku]

[heroku]: http://www.askagram.co


Askagram is a full-stack web application designed and built by Maddie Revill, inspired by the functionality of Quora, but with a twist. While Askagram's users pose questions to the community, much like Quora, all answers must come in the form of pictures.

The backend is implemented in Ruby on Rails using a PostgreSQL database. The frontend utilizes ReactJS and Redux framework, taking advantage of React's virtual DOM to update the interface smoothly and efficiently during user navigation.
The user interface is inspired partly by Instagram. All styling for Askagram was written from scratch using Sass (SCSS syntax.)

## Key Features

### User Signup and Authentication
Users can log in and sign up for an account, or use a demo login to easily check out the site. Passwords are hashed using BCrypt on the backend and session tokens are held in the database for comparison the token held in a site visitor's session cookie

![auth](https://github.com/madrev/askagram/blob/master/docs/screenshots/auth.png)

### Question index
The question index page is "home" for logged-in users, and contains a listing of all questions available for answering. Answered and unanswered questions are fetched from the backend in JSON format, held in the application store and separated on the frontend using a selector function. Answered questions are ordered by the most recent answer submission (as determined by the backend using ActiveRecord), and each is displayed with a carousel element implemented with [react-slick][slick].
[slick]: https://github.com/akiran/react-slick

![question index](https://github.com/madrev/askagram/blob/master/docs/screenshots/answer_detail.png)


### Question Detail
The question detail view displays all of the answers to a question, a like button and like count for each answer and a button to access the answer upload form.
![question detail](https://github.com/madrev/askagram/blob/master/docs/screenshots/question_detail.png)


### Answer submission
Answer submission is done using a custom-built upload widget that sends photos -- uploaded from a computer or from an external URL -- via the [Cloudinary][cloudinary] API for storage and retrieval. A subsequent call to the Askagram API saves the answer record to the database.

[cloudinary]:www.cloudinary.com
![answer upload](https://github.com/madrev/askagram/blob/master/docs/screenshots/answer_upload.png)


### Search
Askagram's search bar is supported by the [pg-search][pg-search] gem, which extends the functionality of ActiveRecord to harness the power of PostgreSQL's text search. Each keystroke in the search bar results in an API call to the QuestionsController and a re-rendering of the search results component to reflect changes in the results.

[pg-search]: https://github.com/Casecommons/pg_search
![search](https://github.com/madrev/askagram/blob/master/docs/screenshots/search_resultsgit pu.png)

## Features in development
The core functionality and interface of Askagram was designed and built in two weeks, and each day the list of features for future development has grown longer.

### Search/Question add integration
 Quora avoids duplicate question submissions by combining its search bar and "Ask question" forms into one. As Askagram's database is populated, it could benefit from the same functionality.

### Photo taking
Plans are in place to utitlize the [WebRTC][webRTC-photos] web API to allow direct photo submission from a user's webcam.

[webRTC-photos]: https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Taking_still_photos

### User profiles
User profiles will include a user profile photo, bio, and a collection of liked questions and answers.

### Expanded answer features
- Captions
- Comments
- Pagination/infinite scroll
