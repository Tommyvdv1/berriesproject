var h3 = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body = document.getElementById("body");
var number1 = "";

function setGradient() {
	body.style.background = "linear-gradient(to right," +  color1.value + "," + color2.value +")";
	console.log(color1.value);

	h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
	// body.style.backgroundColor = color1.value;
	
color2.addEventListener("input", setGradient);

var knopje = document.querySelector(".button1");
knopje.addEventListener("click", RandomGradient);

function random() {
	var number = Math.floor((Math.random() * 255) + 1);
	return number;
}

function ColorRandom() {
	var randomColor = "rgb(" + random() + "," + random() + "," + random() + ")";
	return randomColor;
}

function RandomGradient() {
	body.style.background = "linear-gradient(to right," +  ColorRandom() + "," + ColorRandom() +")";
	h3.textContent = body.style.background + ";";
}

let lijst1 = [1,5,98,56,78,109,1,3,6,8,7,3,54,7,9,2,9,33,42];
let lijst2 = [0, 1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,5,7,9,56,1,2,3,6,7,8,34,55,77,87,12,43,76,3,3,3,3,56,99];

numbers.sort((a,b) => a-b);

function sortlist(numbers) {

	let array2 = [numbers[0]];
    let array1 = [numbers[0]];

for (var i =1; i< numbers.length; i++)
{
	
	if (numbers[i-1]===numbers[i])
	{
		array1.push(numbers[i]);
		console.log(array1);
	}
	else 
	{
		if(array1.length === 1)
		{
			array1.pop();
            array1.push(numbers[i]);
			array2.push(numbers[i]);
		}
		else
		{
			array2.pop();
			array2.push(array1);
            array1 = [];
			array1.push(numbers[i]);
			array2.push(numbers[i]);
		}
	}


}
return array2;

}
