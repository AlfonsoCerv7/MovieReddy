$(document).ready(function () {
  $("select").formSelect();
});



document.getElementById("edit") // this has to be the name of the button's id
   .addEventListener("click", function () {
$(".modal").modal({dismissible: false});
});

document.getElementById("reviewSubmission").addEventListener("click", async function () {
  var movieTitle = document.getElementById("post-title").value; // this needs to grab the movie's title to pass it into a var that will then be searched
  var movieReview = document.getElementById("movie-review").value;
if (movieTitle == "" || movieReview == "") {
M.toast({ html: "Please fill in the complete form!" });
} else{
  console.log("working");
//full post syntax will go here(aka old code)
// async function newFormHandler(event) {
//   //const star_rating = await starRating;
//   console.log("working2");
//   event.preventDefault();
  //console.log(star_rating);
  const title = document.getElementById("post-title").value; //query selector changed to getelement
  console.log(title)
  const movie_review = document.getElementById(
    'movie-review'
  ).value;
  const star_rating = 5
  const genreSelection = document.getElementById("genres");
  const genre = genreSelection.options[genreSelection.selectedIndex].value;

  const response = await fetch(`/api/posts`, { // await was taken away here
    method: "POST",
    body: JSON.stringify({
      title,
      movie_review,
      star_rating,
      genre,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }}
});




// async function editFormHandler(event) {
//   event.preventDefault();

//   const title = document.querySelector('input[name="post-title"]').value;
//   const movie_review = document.querySelector(
//     'input[name="movie-review"]'
//   ).value;
//   const star_rating = document.querySelector('input[name="rate"]').value;
//   const genreSelection = document.getElementById("genres");

//   console.log("This is the star: " + star_rating);
//   const id = window.location.toString().split("/")[
//     window.location.toString().split("/").length - 1
//   ];
//   const response = await fetch(`/api/posts/${id}`, {
//     method: "PUT",
//     body: JSON.stringify({
//       title,
//       movie_review,
//       star_rating,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (response.ok) {
//     document.location.replace("/dashboard/");
//   } else {
//     alert(response.statusText);
//   }
// }

// var el = document.getElementById("update");
// if (el) {
//   el.addEventListener("click", editFormHandler);
// }