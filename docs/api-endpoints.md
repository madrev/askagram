**HTML API**

*Root*
* GET /

**JSON API**

*Users*
* GET /users/:id
* POST /users/

*Session*
* POST /session
* DELETE /session

*Questions*
* GET /api/questions
  - Homepage/index: selection of questions, selection/sort TBD
  - Search: GET /search?filter[query]=my_search
* POST /api/questions
* GET /api/questions/:questionId
* DELETE /api/questions/:questionId

*Answers*
* GET /api/questions/:questionId/answers
  - Will be used with query string to retriev
* POST /api/questions/:questionId/answers
* DELETE /api/questions/questionId/answers/:answerId

*Likes*
* POST /api/likes
* DELETE /api/likes/:id
