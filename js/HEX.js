function removePlaceholder(param) {
    var elem = document.getElementById('placeholder' + param);
    elem.parentNode.removeChild(elem);
    return false;
}

$(document).ready(function(){
  $(".hexagon").click(function(){
    if (this.id == "song0") {
      document.getElementById("songname").innerHTML = document.getElementById("song0name").innerHTML;
      document.getElementById("songartist").innerHTML = document.getElementById("song0artist").innerHTML;
      document.getElementById("song").style.background = document.getElementById("song0").style.background;
    }
    if (this.id == "song1") {
      document.getElementById("songname").innerHTML = document.getElementById("song1name").innerHTML;
      document.getElementById("songartist").innerHTML = document.getElementById("song1artist").innerHTML;
      document.getElementById("song").style.background = document.getElementById("song1").style.background;
    }
    if (this.id == "song2") {
      document.getElementById("songname").innerHTML = document.getElementById("song2name").innerHTML;
      document.getElementById("songartist").innerHTML = document.getElementById("song2artist").innerHTML;
      document.getElementById("song").style.background = document.getElementById("song2").style.background;
    }
    if (this.id == "song3") {
      document.getElementById("songname").innerHTML = document.getElementById("song3name").innerHTML;
      document.getElementById("songartist").innerHTML = document.getElementById("song3artist").innerHTML;
      document.getElementById("song").style.background = document.getElementById("song3").style.background;
    }
    if (this.id == "song4") {
      document.getElementById("songname").innerHTML = document.getElementById("song4name").innerHTML;
      document.getElementById("songartist").innerHTML = document.getElementById("song4artist").innerHTML;
      document.getElementById("song").style.background = document.getElementById("song4").style.background;
    }
    if (this.id == "song5") {
      document.getElementById("songname").innerHTML = document.getElementById("song5name").innerHTML;
      document.getElementById("songartist").innerHTML = document.getElementById("song5artist").innerHTML;
      document.getElementById("song").style.background = document.getElementById("song5").style.background;
    }
    if (this.id == "song6") {
      document.getElementById("songname").innerHTML = document.getElementById("song6name").innerHTML;
      document.getElementById("songartist").innerHTML = document.getElementById("song6artist").innerHTML;
      document.getElementById("song").style.background = document.getElementById("song6").style.background;
    }
    document.getElementById("song").style.backgroundSize = "700px 700px";
    $(".bighexagon").show(1000);
  });
});

$(document).ready(function(){
  $(".bighexagon").click(function(){
    $(".bighexagon").hide(1000);
  });
});

var url = "JSON.txt";

$.ajaxSetup({beforeSend: function (xhr) {
    if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
    }
}
            });

$.getJSON(url, function (json) {
    document.getElementById("song0name").innerHTML = json[0].song;
    document.getElementById("song0artist").innerHTML = json[0].artist;
    document.getElementById("song1name").innerHTML = json[1].song;
    document.getElementById("song1artist").innerHTML = json[1].artist;
    document.getElementById("song2name").innerHTML = json[2].song;
    document.getElementById("song2artist").innerHTML = json[2].artist;
    document.getElementById("song3name").innerHTML = json[3].song;
    document.getElementById("song3artist").innerHTML = json[3].artist;
    document.getElementById("song4name").innerHTML = json[4].song;
    document.getElementById("song4artist").innerHTML = json[4].artist;
    document.getElementById("song5name").innerHTML = json[5].song;
    document.getElementById("song5artist").innerHTML = json[5].artist;
    document.getElementById("song6name").innerHTML = json[6].song;
    document.getElementById("song6artist").innerHTML = json[6].artist;
    document.getElementById("song0").style.background = json[0].artwork + " center center";
    document.getElementById("song1").style.background = json[1].artwork + " center center";
    document.getElementById("song2").style.background = json[2].artwork + " center center";
    document.getElementById("song3").style.background = json[3].artwork + " center center";
    document.getElementById("song4").style.background = json[4].artwork + " center center";
    document.getElementById("song5").style.background = json[5].artwork + " center center";
    document.getElementById("song6").style.background = json[6].artwork + " center center";
    document.getElementById("song0").style.backgroundSize = "230px 230px";
    document.getElementById("song1").style.backgroundSize = "230px 230px";
    document.getElementById("song2").style.backgroundSize = "230px 230px";
    document.getElementById("song3").style.backgroundSize = "230px 230px";
    document.getElementById("song4").style.backgroundSize = "230px 230px";
    document.getElementById("song5").style.backgroundSize = "230px 230px";
    document.getElementById("song6").style.backgroundSize = "230px 230px";
});

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
        imageSearch.setSearchCompleteCallback(this, searchComplete, ["song0"]);

        //imageSearch.setSiteRestriction("wikipedia.org");

        //Perform search
        //imageSearch.execute("metallica metallica album art");
        
        // Include the required Google branding
        google.search.Search.getBranding('branding');
      }

function searchComplete(value) {
  // Check that we got results
  if (imageSearch.results && imageSearch.results.length > 0) {

    // Grab our content div, clear it.
    var contentDiv = document.getElementById(value);

    // Loop through our results, printing them to the page.
    var result = imageSearch.results[0].url;
    contentDiv.style.background = "url(" + result + ")" + " center center";
    contentDiv.style.backgroundSize = "230px 230px";
  }
}

google.setOnLoadCallback(OnLoad);

function searchIndividual(value) {
  imageSearch.setSearchCompleteCallback(this, searchComplete, [value]);
  imageSearch.execute(document.getElementById(value+"name").innerHTML + " " + document.getElementById(value+"artist").innerHTML + " " + "album cover");
  imageSearch.clearResults();
}

function doSearch() {
  searchIndividual("song0");
  imageSearch.clearResults();
  searchIndividual("song1");
  imageSearch.clearResults();
  searchIndividual("song2");
  imageSearch.clearResults();
  searchIndividual("song3");
  imageSearch.clearResults();
  searchIndividual("song4");
  imageSearch.clearResults();
  searchIndividual("song5");
  imageSearch.clearResults();
  searchIndividual("song6");
  imageSearch.clearResults();
}

imageSearch.execute("random image");
var link = imageSearch.results[0].url;
document.getElementById("song0").style.background = "url(" + link + ")" + " center center";
document.getElementById("song0").style.backgroundSize = "230px 230px";


/**
 function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' + 
        arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
}
 */

/** to change on hover, also relocate id to div with text
 $(function(){
   $('#song0').on('focus mouseenter', function(){
    $(this).parent().css("background", song0Album);
   });
});
 */