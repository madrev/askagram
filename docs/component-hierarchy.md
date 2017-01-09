## Component Hierarchy



**SplashPageContainer**
 - SplashPage
  + AuthForm

**QuestionIndexContainer**
 - QuestionIndex
  + QuestionIndexItem
  + AnswerThumbnails

**NavBar**
 - SearchBar
 - SearchResultsContainer
  + SearchResults

**QuestionDetailContainer**
 - QuestionDetail
  + AnswerDetail

**NewQuestionContainer**
 - QuestionFormContainer
  - QuestionForm (Modal Component)

**AddAnswerContainer**  
- AddAnswerModal (Modal component)
  + UploadAnswerForm
  + UrlEntryForm (BONUS)
  + AddPhotoForm (BONUS)



## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "SplashPage" |
| "/questions" | "QuestionIndexContainer" |
| "/questions/:questionId" | "QuestionDetailContainer" |
| "/new-question" | "NewQuestionContainer" |
| "/questions/:questionId/new-answer" | "AddAnswerContainer" |
