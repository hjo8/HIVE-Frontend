var myArray = [
{
"num": "Q1",
"context": "Is this song sung by a female artist?"
},
{
"num": "Q2",
"context": "Is this song fast?"
},
{
"num": "Q3",
"context": "Is the genre country?"
},
{
"num": "Q4",
"context": "Is the genre jazz?"
},
{
"num": "Q5",
"context": "Is the genre pop?"
},
{
"num": "Q6",
"context": "Is the genre heavy metal?"
},
{
"num": "Q7",
"context": "Do the instruments include a piano?"
},
{
"num": "Q8",
"context": "Do the instruments include a guitar?"
},
{
"num": "Q9",
"context": "Do the instruments include drums?"
},
{
"num": "Q10",
"context": "Is this song sung by a single person?"
}
]
//myArray contains the questions. To be completed

var i = 0;

var tagList = [];

function myFunction(arr) {
   	var out = "";
	out += '<p>' + arr[i].num + '</p>' + 
	'<p>' + arr[i].context + '</p>';

    document.getElementById("context").innerHTML = out;
}

myFunction(myArray);

YesButton.addEventListener("click", clickedY);
NoButton.addEventListener("click", clickedN);
displayChoices.addEventListener("click", showChoices);
next.addEventListener("click", goToNext);
previous.addEventListener("click", goToPrevious);

function clickedY(eve){
	if ( i == 0 )
		tagList.push("female");
	if ( i == 1 )
		tagList.push("fast");
	if ( i == 2 )
		tagList.push("country");
	if ( i == 3 )
		tagList.push("jazz");
	if ( i == 4 )
		tagList.push("pop");
	if ( i == 5 )
		tagList.push("heavy metal");
	if ( i == 6 )
		tagList.push("piano");
	if ( i == 7 )
		tagList.push("guitar");
	if ( i == 8 )
		tagList.push("drums");
	i++;
	myFunction(myArray);
}

function clickedN(eve){
	if ( i == 0 )
		tagList.push("male");
	if ( i == 1 )
		tagList.push("slow");
	if ( i == 9 )
		tagList.push("group");
	i++;
	myFunction(myArray);

}//needs to add data process and transport functions.

function showChoices(){
	var text = tagList;
    document.getElementById("choicesList").innerHTML = text;
}
