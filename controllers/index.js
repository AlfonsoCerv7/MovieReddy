
APIKey = '141d524e5cf007818feee1b4ecf58351';

fetch('https://api.themoviedb.org/3/movie/550?api_key=' + APIKey
  )
    // Converts the response to JSON
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
      imgEl.setAttribute('src', response.data.original_title); //get data from console log under data
  
      // Append the '<img>' element to the page
        moviedbImgae.appendChild(imgEl);
    });