( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            console.log(data.curTop);
        }
    });
} )( jQuery );

function showValue(newValue)
{
	document.getElementById("range").innerHTML=newValue;
}

var userInput = function() {

}

function getTags() {
    document.getElementById("tags").submit();
}

/**
var loudness = null; 
var inputElements = document.getElementsByClassName('loudness');
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
}
*/

function showTags() {
    var x = document.getElementById("tags");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}

$.ajax({
    type: "GET",
    url: "https://getJsonData",
    dataType: "json",
    success: processData,
    error: function(){ alert("failed"); }
});

function processData(data)
{
    //do something with data
}