genre_tags = document.getElementsByClassName("genre");
instrument_tags = document.getElementsByClassName("instrument");
loudness_tags = document.getElementsByClassName("loudness");

for (var i=0; i<genre_tags.length; i++){ 
	var tag = genre_tags[i];
	if (tag.checked) {
		//send HTTP request
		console.log(tag.value);
	}
}

for (var i=0; i<instrument_tags.length; i++){ 
	var tag = instrument_tags[i];
	if (tag.checked) {
		//send HTTP request
		console.log(tag.value);
	}
}

for (var i=0; i<loudness_tags.length; i++){ 
	var tag = loudness_tags[i];
	if (tag.checked) {
		//send HTTP request
		console.log(tag.value);
	}
}
