$(document).ready(function () {
  $("select").formSelect();
});

var main = document
   .getElementById("myBtn") // this has to be the name of the button's id
   .addEventListener("click", function () {
$(".modal").modal({dismissible: false});
});




// code for closing the modal, and clearing it. 
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
  // var star_rating;
  // star_rating = document
  //   .querySelector("#star5")
  //   .addEventListener("click", function () {
  //     return 5;
  //   });
  // star_rating = document
  //   .querySelector("#star4")
  //   .addEventListener("click", function () {
  //     return 4;
  //   });
  // document.querySelector("#star3").addEventListener("click", function () {
  //   star_rating = 3;
  // });

  // document.querySelector("#star2").addEventListener("click", function () {
  //   star_rating = 2;
  // });
  // document.querySelector("#star1").addEventListener("click", function () {
  //   star_rating = 1;
  // });
  console.log("This is the star: " + star_rating);
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
  }


// document
//   .getElementById("reviewSubmission") // this will be changed to getelementbyid(post)
//   .addEventListener("click", newFormHandler);


}
// revisit clearing text input after successful posting later
// movieTitle.innerHTML="";
// movieReview.innerHTML="";
});