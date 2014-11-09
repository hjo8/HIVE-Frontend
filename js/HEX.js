/**
var song0Album = "url(http://www.hwdyk.com/q/quizimage/albumcovertrivia.jpg)";
var song1Album = "url(http://www.amiright.com/album-cover-themes/images/album-ACDC-BLACK-ICE.jpg)";
var song2Album = "url(http://c0903002.cdn.cloudfiles.rackspacecloud.com/9417-coldplay_ghost_stories_album_artwork.jpg)";
var song3Album = "url(http://archive.wired.com/images/article/full/2009/02/abbey_road.jpg)";
var song4Album = "url(http://www.tomlohrmannmusic.com/blog/wp-content/uploads/2012/09/muse-the-resistance-album-artwork.jpeg)";
var song5Album = "url(http://www.smashingmagazine.com/images/music-cd-covers/30.jpg)";
var song6Album = "url(http://www.tomlohrmannmusic.com/blog/wp-content/uploads/2012/09/nirvana_nevermind_album_cover.jpeg)";
*/


var xmlhttp = new XMLHttpRequest();
var url = "JSON.txt";

var json_test = {"status":"fail"}; //{"status" : "success", "names" : ["name1", "name2", "name3", "name4", "name5", "name6", "name7"]};

$.ajaxSetup({beforeSend: function(xhr){
  if (xhr.overrideMimeType)
  {
    xhr.overrideMimeType("application/json");
  }
}
});

$.getJSON( "JSON.txt", function( json ) {
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
 });

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

var songAlbums = {
	song0Album : "url(http://www.hwdyk.com/q/quizimage/albumcovertrivia.jpg)",
	song1Album : "url(http://www.amiright.com/album-cover-themes/images/album-ACDC-BLACK-ICE.jpg)",
	song2Album : "url(http://c0903002.cdn.cloudfiles.rackspacecloud.com/9417-coldplay_ghost_stories_album_artwork.jpg)",
	song3Album : "url(http://archive.wired.com/images/article/full/2009/02/abbey_road.jpg)",
	song4Album : "url(http://www.tomlohrmannmusic.com/blog/wp-content/uploads/2012/09/muse-the-resistance-album-artwork.jpeg)",
	song5Album : "url(http://www.smashingmagazine.com/images/music-cd-covers/30.jpg)",
	song6Album : "url(http://www.tomlohrmannmusic.com/blog/wp-content/uploads/2012/09/nirvana_nevermind_album_cover.jpeg)"
}

/** to change on hover, also relocate id to div with text
$(function(){
   $('#song0').on('focus mouseenter', function(){
    $(this).parent().css("background", song0Album);
   });
});
*/

document.getElementById("song0").style.background = songAlbums['song0Album'] + " center center";
document.getElementById("song1").style.background = songAlbums['song1Album'] + " center center";
document.getElementById("song2").style.background = songAlbums['song2Album'] + " center center";
document.getElementById("song3").style.background = songAlbums['song3Album'] + " center center";
document.getElementById("song4").style.background = songAlbums['song4Album'] + " center center";
document.getElementById("song5").style.background = songAlbums['song5Album'] + " center center";
document.getElementById("song6").style.background = songAlbums['song6Album'] + " center center";

document.getElementById("song0").style.backgroundSize="230px 230px";
document.getElementById("song1").style.backgroundSize="230px 230px";
document.getElementById("song2").style.backgroundSize="230px 230px";
document.getElementById("song3").style.backgroundSize="230px 230px";
document.getElementById("song4").style.backgroundSize="230px 230px";
document.getElementById("song5").style.backgroundSize="230px 230px";
document.getElementById("song6").style.backgroundSize="230px 230px";

/**
var song0name = json_test.names[0];
var song1name = json_test.names[1];
var song2name = json_test.names[2];
var song3name = json_test.names[3];
var song4name = json_test.names[4];
var song5name = json_test.names[5];
var song6name = json_test.names[6];
*/