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