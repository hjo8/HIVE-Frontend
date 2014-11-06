var myArray = [
{
"num": "Q1",
"context": "asdf"
},
{
"num": "Q2",
"context": "zxcv"
},
{
"num": "Q3",
"context": "qwer"
},
{
"num": "Q4",
"context": "tyui"
}
]
//myArray contains the questions. To be completed

var i = -1;

var tagList = [];

function myFunction(arr) {
	i++;
   	var out = "";
	out += '<p>' + arr[i].num + '</p>' + 
	'<p>' + arr[i].context + '</p>';

    document.getElementById("context").innerHTML = out;
}

myFunction(myArray);

YesButton.addEventListener("click", clickedY);
NoButton.addEventListener("click", clickedN);
displayChoices.addEventListener("click", showChoices);

function clickedY(eve){
	myFunction(myArray);
	tagList.push("Yes");
}

function clickedN(eve){
	myFunction(myArray);
	tagList.push("No");
}//needs to add data process and transport functions.

function showChoices() {
	var text = tagList;
    document.getElementById("choicesList").innerHTML = text;
}
