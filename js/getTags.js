genre_tags = document.getElementsByClassName("genre");
instrument_tags = document.getElementsByClassName("instrument");
loudness_tag = document.getElementsByClassName("loudness");
currentTempo = document.getElementById("tempo").innerHTML;
currentLoudness = document.getElementById("loudness").innerHTML;

function showTempoValue(newValue) {
    document.getElementById("tempo").innerHTML = newValue;
}

function showLoudnessValue(newValue) {
    document.getElementById("loudness").innerHTML = newValue;
}

function getTempo() {
    currentTempo = document.getElementById("tempo").innerHTML;
    tag_json.tempo = currentTempo;
}

function getLoudness() {
    currentLoudness = document.getElementById("loudness").innerHTML;
    tag_json.loudness = currentLoudness;
}

var tag_list = [];
var tag_json = {
    "type": "tags",
    "content": tag_list,
    "tempo": currentTempo,
    "loudness": currentLoudness
};

function getTags() {
    for (var i = 0; i < genre_tags.length; i++) {
        var tag = genre_tags[i];
        if (tag.checked) {
            tag_list.push(tag.value);
            console.log(tag.value);
        }
    }

    for (var i = 0; i < instrument_tags.length; i++) {
        var tag = instrument_tags[i];
        if (tag.checked) {
            tag_list.push(tag.value);
            console.log(tag.value);
        }
    }

    for (var i = 0; i < loudness_tag.length; i++) {
        var tag = loudness_tag[i];
        if (tag.checked) {
            tag_list.push(tag.value);
            console.log(tag.value);
        }
    }

    tag_json.loudness = currentLoudness;

    tag_json.tempo = currentTempo;
}

function showTags() {
    var text = tag_list;
    document.getElementById("demo").innerHTML = text;
}

function getTagsString() {
    var str = document.getElementById("tagstring").value;
    tag_list = str.split(", ");
    tag_json.content = tag_list;
}

var url = "writefiletest.txt";

$.ajaxSetup({beforeSend: function (xhr) {
    if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
    }
}
            });

xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST", url, true);
xmlhttp.setRequestHeader("Content-type", "application/json");
xmlhttp.onreadystatechange = function () { //Call a function when the state changes.
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        alert(xmlhttp.responseText);
    }
}

//var tag_text = JSON.stringify(tag_json);

function postTags() {
    getTags();
    getTempo();
    getLoudness();
    xmlhttp.send(JSON.stringify(tag_json));
}
