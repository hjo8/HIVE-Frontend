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
	"tags":tag_list,
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
