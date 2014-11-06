/**
var song0Album = "url(http://www.hwdyk.com/q/quizimage/albumcovertrivia.jpg)";
var song1Album = "url(http://www.amiright.com/album-cover-themes/images/album-ACDC-BLACK-ICE.jpg)";
var song2Album = "url(http://c0903002.cdn.cloudfiles.rackspacecloud.com/9417-coldplay_ghost_stories_album_artwork.jpg)";
var song3Album = "url(http://archive.wired.com/images/article/full/2009/02/abbey_road.jpg)";
var song4Album = "url(http://www.tomlohrmannmusic.com/blog/wp-content/uploads/2012/09/muse-the-resistance-album-artwork.jpeg)";
var song5Album = "url(http://www.smashingmagazine.com/images/music-cd-covers/30.jpg)";
var song6Album = "url(http://www.tomlohrmannmusic.com/blog/wp-content/uploads/2012/09/nirvana_nevermind_album_cover.jpeg)";
*/

var json_test = {"status" : "success", "names" : ["name1", "name2", "name3", "name4", "name5", "name6", "name7"]};

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

var song0name = json_test.names[0];
var song1name = json_test.names[1];
var song2name = json_test.names[2];
var song3name = json_test.names[3];
var song4name = json_test.names[4];
var song5name = json_test.names[5];
var song6name = json_test.names[6];
/**
document.getElementById("song0text").innerHTML = song0text;
document.getElementById("song1text").innerHTML = song1text;
document.getElementById("song2text").innerHTML = song2text;
document.getElementById("song3text").innerHTML = song3text;
document.getElementById("song4text").innerHTML = song4text;
document.getElementById("song5text").innerHTML = song5text;
document.getElementById("song6text").innerHTML = song6text;*/
