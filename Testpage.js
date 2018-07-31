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

// let numbers = [1,5,98,56,78,109,1,3,6,8,7,3,54,7,9,2,9,33,42];

// numbers.sort((a,b) => a-b);

// function sortlist() {

// 	let array2 = [];
//      let array1 = [numbers[0]];

// for (var i =1; i< numbers.length; i++)
// {
	
// 	if (numbers[i-1]===numbers[i])
// 	{
// 		array1.push(numbers[i]);
// 		console.log(array1);
// 	}
//      else if (i===1)
//      {
//             array1 = [];
//              array1.push(numbers[i]);
// 		array2.push(numbers[i]);
// 		console.log(array2);
//      }
// 	else 
// 	{
//              array2.push(array1);
//              array1 = [];
//              array1.push(numbers[i]);
// 		array2.push(numbers[i]);
// 		console.log(array2);
// 	}


// }
// return array2;

}
