var imageSearch;

google.load('search', '1');

function OnLoad() {
      
        // Create an Image Search instance.
        imageSearch = new google.search.ImageSearch();

        imageSearch.setRestriction(
  google.search.ImageSearch.RESTRICT_IMAGESIZE,
  google.search.ImageSearch.IMAGESIZE_MEDIUM);

        // Set searchComplete as the callback function when a search is 
        // complete.  The imageSearch object will have results in it.
        imageSearch.setSearchCompleteCallback(this, searchComplete, null);

        //imageSearch.setSiteRestriction("wikipedia.org");

        // Find me a beautiful car.
        imageSearch.execute("metallica metallica album art");
        
        // Include the required Google branding
        google.search.Search.getBranding('branding');
      }

function searchComplete() {
  // Check that we got results
  if (imageSearch.results && imageSearch.results.length > 0) {

    // Grab our content div, clear it.
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    // Loop through our results, printing them to the page.
    var results = imageSearch.results;
    for (var i = 0; i < results.length; i++) {
      // For each result write it's title and image to the screen
      var result = results[i];
      var imgContainer = document.createElement('div');
      var title = document.createElement('div');
      
      // We use titleNoFormatting so that no HTML tags are left in the 
      // title
      title.innerHTML = result.titleNoFormatting;
      var newImg = document.createElement('img');

      // There is also a result.url property which has the escaped version
      var link = imageSearch.results[0].url;
      newImg.src=link;
      imgContainer.appendChild(title);
      imgContainer.appendChild(newImg);

      // Put our title + image in the content
      contentDiv.appendChild(imgContainer);
    }
  }
}
