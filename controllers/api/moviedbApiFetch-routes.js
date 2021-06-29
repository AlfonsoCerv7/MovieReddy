const APIKey = '141d524e5cf007818feee1b4ecf58351';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=';
const movieButton = document.getElementById("movie-button");

//button click event
movieButton.addEventListener("click", function(){
 const movieInput = document.getElementById("movie-input").value;

//create an if statement to delete/remove imgEl (movie poster), overviewEl (movie details), etc when user searches another movie title
//
//

console.log('log: movieInput ', movieInput);

//this will fetch the moviedb api and has the user input to ouput the movie image, release date, movie detail of their choosing
fetch( url + APIKey + '&query=' + movieInput
)
.then(function(response) {
     return response.json();
   })
   .then(function(response) {
     console.log(response);
     
//=============================This gets the moviedb Image========================================================//

   // Use 'querySelector' to get the ID of where the moviedb image will be displayed
   var moviedbImage = document.querySelector('#moviedb-image');
 
   // Create an '<img>' element
   var imgEl = document.createElement("img");
       
   // Set that element's 'src' attribute to the 'image_url' from the moviedb API response
   imgEl.setAttribute('src',`https://image.tmdb.org/t/p/w500${response.results[0].poster_path}`); //get response data from console log
     
   // Append the '<img>' element to the page
   moviedbImage.appendChild(imgEl);

//================================End of the moviedb Image========================================================//


//=============================This gets the moviedb release date=================================================//

   //Use getElementById to get the ID where the movie release date will be displayed
   var movieRelease = document.getElementById('movie-release');

   //create a div element from release_date and have it appear in the index.html
   var movieDate = document.createElement("div").innerHTML = response.results[0].release_date;

   //Append the api response release date
   movieRelease.append(movieDate);

//===============================End of the moviedb release date==================================================//


//===============================This gets the movie detail ======================================================//

   // Use getElementById to get the ID of where the movie detail will be displayed
   var movieDetail = document.getElementById('movie-detail');

   //create a div element for movieOverview and have it appear in the index.html
   var movieOverview = document.createElement("div").innerHTML = response.results[0].overview;

   //Append the api response overview
   movieDetail.append(movieOverview);

//===============================End of the movie detail ========================================================//

//============================This will get the movie genre =====================================================//

//================================End of the movie genre ========================================================//
 });
})

