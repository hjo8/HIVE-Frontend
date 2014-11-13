genre_tags = document.getElementsByClassName("genre");
instrument_tags = document.getElementsByClassName("instrument");
loudness_tag = document.getElementsByClassName("loudness");
currentTempo = document.getElementById("range").innerHTML;

function showValue(newValue)
{
	document.getElementById("range").innerHTML=newValue;
}

function getTempo() {
	currentTempo = document.getElementById("range").innerHTML;
	tag_json.tempo = currentTempo;
}

var tag_list = [];
var tag_json = {
	"type":"tags",
	"content":tag_list,
	"tempo":currentTempo};

function getTags() {
	for (var i=0; i<genre_tags.length; i++){ 
		var tag = genre_tags[i];
		if (tag.checked) {
			tag_list.push(tag.value);
			console.log(tag.value);
		}
	}

	for (var i=0; i<instrument_tags.length; i++){ 
		var tag = instrument_tags[i];
		if (tag.checked) {
			tag_list.push(tag.value);
			console.log(tag.value);
		}
	}

	for (var i=0; i<loudness_tag.length; i++){ 
		var tag = loudness_tag[i];
		if (tag.checked) {
			tag_list.push(tag.value);
			console.log(tag.value);
		}
	}
}

function showTags() {
	var text = tag_list;
    document.getElementById("demo").innerHTML = text;
}

var url = "writefiletest.txt";

$.ajaxSetup({beforeSend: function(xhr){
  if (xhr.overrideMimeType)
  {
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
	xmlhttp.send(JSON.stringify(tag_json));
}
