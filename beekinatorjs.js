var myArray = [
{
"num": "Q1",
"context": "asdf",
"choiceA": "A:a",
"choiceB": "B:b",
"choiceC": "C:c"
},
{
"num": "Q2",
"context": "zxcv",
"choiceA": "A:d",
"choiceB": "B:e",
"choiceC": "C:f"
},
{
"num": "Q3",
"context": "qwer",
"choiceA": "A:g",
"choiceB": "B:h",
"choiceC": "C:i"
}
]
//myArray contains the questions. To be completed

var i = -1;

function myFunction(arr) {
	i++;
   	var out = "";
	out += '<p>' + arr[i].num + '</p>' + 
	'<p>' + arr[i].context + '</p>';

    document.getElementById("context").innerHTML = out;
    document.getElementById("buttonA").innerHTML = arr[i].choiceA;
    document.getElementById("buttonB").innerHTML = arr[i].choiceB;
    document.getElementById("buttonC").innerHTML = arr[i].choiceC;
}

myFunction(myArray);

buttonA.addEventListener("click", clicked);
buttonB.addEventListener("click", clicked);
buttonC.addEventListener("click", clicked);

function clicked(eve){
	myFunction(myArray);
}//needs to add data process and transport functions.
