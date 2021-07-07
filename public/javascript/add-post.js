//add post modal
$(document).ready(function () {
  $("select").formSelect();
});

var main = document
  .getElementById("myBtn") //name of the button's id
  .addEventListener("click", function () {
    $(".modal").modal({ dismissible: false });
  });

var star_rating;

document.querySelector("#star5").addEventListener("click", function () {
  star_rating = "5";
});
document.querySelector("#star4").addEventListener("click", function () {
  star_rating = "4";
});
document.querySelector("#star3").addEventListener("click", function () {
  star_rating = "3";
});

document.querySelector("#star2").addEventListener("click", function () {
  star_rating = "2";
});
document.querySelector("#star1").addEventListener("click", function () {
  star_rating = "1";
});

// code for closing the modal, and clearing it.
document
  .getElementById("reviewSubmission")
  .addEventListener("click", async function () {
    var movieTitle = document.getElementById("post-title").value; //grab the movie's title to pass it into a var that will then be searched
    var movieReview = document.getElementById("movie-review").value;
    if (movieTitle == "" || movieReview == "") {
      M.toast({ html: "Please fill in the complete form!" });
    } else {
      const title = document.getElementById("post-title").value;
      console.log(title);
      const movie_review = document.getElementById("movie-review").value;

      const genreSelection = document.getElementById("genres");
      const genre = genreSelection.options[genreSelection.selectedIndex].value;

      const response = await fetch(`/api/posts`, {
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
    }
  });
