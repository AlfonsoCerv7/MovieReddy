const APIKey = '141d524e5cf007818feee1b4ecf58351';
 const url = 'https://api.themoviedb.org/3/search/movie?api_key=';
 let userInput = '';

//Moviedb documentation to get image you need:
//To build an image url I need 1)base_url 2)file_size 3)path_size

 //this first fetch gets the base_url
//fetch('https://api.themoviedb.org/3/configuration?api_key=' + APIKey
fetch( url + APIKey + '&query=Jack+Reacher'
)
 .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
      // Use 'querySelector' to get the ID of where the moviedb image will be displayed
       var moviedbImgae = document.querySelector('#moviedb-image');
  
      // Create an '<img>' element
        var imgEl = document.createElement("img");
        
      // Set that element's 'src' attribute to the 'image_url' from our moviedb API response
      imgEl.setAttribute('src',`https://image.tmdb.org/t/p/w500${response.results[0].backdrop_path}`); //get response data from console log
      if(response.length) {

      }
            // Append the '<img>' element to the page
        moviedbImgae.appendChild(imgEl);

    });