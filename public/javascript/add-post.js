// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//const star_rating = document.querySelector('input[name="rate"]').value;
//console.log("This is the star: " + star_rating);

// async function starRating(star_rating) {
//   return star_rating;
// }

async function newFormHandler(event) {
  //const star_rating = await starRating;
  event.preventDefault();
  //console.log(star_rating);
  const title = document.querySelector('input[name="post-title"]').value;
  const movie_review = document.querySelector(
    'input[name="movie-review"]'
  ).value;
  const star_rating = document.querySelector('input[name="rate"]').value;
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

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

// document.querySelector("#star5").addEventListener("click", function () {
//   star_rating = 5;
//   // starRating(star_rating);
//   console.log(star_rating);
// });
// document.querySelector("#star4").addEventListener("click", function () {
//   star_rating = 4;
//   //starRating(star_rating);
//   console.log(star_rating);
// });
// document.querySelector("#star3").addEventListener("click", function () {
//   star_rating = 3;
//   //starRating(star_rating);
//   console.log(star_rating);
// });

// document.querySelector("#star2").addEventListener("click", function () {
//   star_rating = 2;
//   //starRating(star_rating);
//   console.log(star_rating);
// });
// document.querySelector("#star1").addEventListener("click", function () {
//   star_rating = 1;
//   // starRating(star_rating);
//   console.log(star_rating);
// });

/*document
  .querySelector(".new-post-form")
  .addEventListener("submit", async function (event) {
    var star_rating = document.querySelector('input[name="rate"]');
    star_rating.addEventListener(
      "click",
      function (event) {
        var result = getPosition(event);

        // result is your return value
      },
      false
    );

    //const star_rating = await starRating;
    event.preventDefault();
    //console.log(star_rating);
    const title = document.querySelector('input[name="post-title"]').value;
    const movie_review = document.querySelector(
      'input[name="movie-review"]'
    ).value;
    //const star_rating = document.querySelector('input[name="rate"]').value;
    const genreSelection = document.getElementById("genres");
    const genre = genreSelection.options[genreSelection.selectedIndex].value;

    // document.querySelector("#star5").addEventListener("click", function () {
    //   star_rating = 5;
    // });
    // document.querySelector("#star4").addEventListener("click", function () {
    //   star_rating = 4;
    // });
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
  });
*/
