# Quora-Instagram mashup -- Name TBD

[Trello link][trello]

[trello]: https://trello.com/b/ScwBLLvg/quora-insta-fullstack

## Minimum Viable Product
This project will be a question-and-answer app, with functionality similar to Quora, with one catch -- all answers must come in the form of images. Think Quora functionality with an Instagram interface.

MVP features include:
*  Hosting on Heroku
*  New account creation, login, and guest/demo login
*  A production README, replacing this README
*  Question creation
*  Photo-answer upload (image hosting on Cloudinary)
*  Question search
*  Likes

Bonus features include
* Photo capture from user webcam using [WebRTC][webRTC-photos]
* Infinite scroll on question and answer index pages
* User profile showing all user submissions


## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]


[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md
[webRTC-photos]: https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Taking_still_photos

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Photos & Likes Model, API, and components (3 days)

**Objective:** Photo-answers and Likes can be created, read, and destroyed through
the API.
* NB: Questions will need to be supported at the DB/model level (with a few questions seeded) in order to develop proper API queries, actions and component rendering. Client-side question manipulation will be saved for phase 3.
* Implement QuestionDetail view and AddAnswerModal

### Phase 3: Questions (1 day)

**Objective:** Questions can be created, read, edited and destroyed through the API.
* Implement NewQuestionForm modal
* Implement QuestionIndex

### Phase 4: Search (2 days)

**Objective:** Questions can be searched. Search bar in nav component will update with search results to select from.
* Add search bar to nav component

### Phase 5: Styling & Cleanup (1 day)

**Objective:** Spiff up interface, flesh out seed data, and prepare for submission.
* Set breakpoints for responsive grids
* Add infinite scroll if time allows
