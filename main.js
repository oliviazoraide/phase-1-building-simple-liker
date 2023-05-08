// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hideError = document.querySelector("#modal")
hideError.classList.add("hidden")

let emptyHearts = document.querySelectorAll(".like-glyph")

emptyHearts.forEach((emptyHeart) => {
  emptyHeart.addEventListener("click", () => {
  mimicServerCall()
  .then (() => {
    if (emptyHeart.classList.contains("activated-heart")) {
      emptyHeart.classList.remove("activated-heart")
      emptyHeart.innerText = EMPTY_HEART
    }
    else {
      emptyHeart.classList.add("activated-heart")
      emptyHeart.innerText = FULL_HEART
    }
  })
  .catch(() => {
    hideError.classList.remove("hidden")
    const errorMessage = document.querySelector("#modal-message")
    errorMessage.innerText = "There was a server error, please try again"

    setTimeout(() => hideError.classList.add("hidden"), 3000)
    })
})
})








  






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
