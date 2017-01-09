``` javascript
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createQuestion: {errors: ["body can't be blank"]},
    addAnswer: {errors: ["That's not an image file"]}
  },
  questions: {
    1: {
      title: "Have you ever met a celebrity?",
      user_id: 1,
      answers: {
        31: {
          id: 31
          image_url: "image.com/pic.jpg"
        },
        47: {
          id: 47
          image_url: "image.com/pic2.jpg"
        },
    2: {
      title: "Have you ever met a celebrity?",
      author_id: 1,
      answers: {
        5: {
          id: 5
          image_url: "image.com/pic3.jpg"
        },
        27: {
          id: 27
          image_url: "image.com/pic4.jpg"
        }
      }
    }
  },
  questionDetail:  {
    title: "What did you look like ten years ago?",
    author_id: 4,
    answers: {
      11: {
        id: 11
        image_url: "image.com/pic.jpg",
        createdAt: 2017-1-6 11:00:34,
        likers: [{ id: 3, username: "bobloblaw"}, { id: 98, username: "looseseal"}]
        }
      }
    }
  }
}


```

Note: not sure if distinct question/questionDetail slices are necessary, or if they can just fill the same slices with more/less detailed info depending on active components
