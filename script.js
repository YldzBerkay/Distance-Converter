(function(){
    'use strict';
    let convertType = "miles";
	const heading = document.querySelector("h1");
	const intro = document.querySelector("p");
	const answerDiv = document.getElementById("answer");
	const form = document.getElementById("convert");

	document.addEventListener('keydown',function(event){
		var key = event.code;
		if(key === 'KeyK'){
			//change the heading.
			heading.innerHTML = "Kilometers to Miles Converter";
			//change the intro paragraph.
			intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
			//change the value of the convertType variable.
			convertType = "kilometers";
		}else if(key === 'KeyM'){
			//change the heading.
			heading.innerHTML = "Miles to Kilometers Converter";
			//change the intro paragraph.
			intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";
			//change the value of the convertType variable.
			convertType = "miles";
		}
	});

	form.addEventListener('submit',function(event){
		event.preventDefault();
		var distance = parseFloat(document.getElementById("distance").value);
		if(distance){
			//convert
			if(convertType === "miles"){
				const converted = (distance * 1.60934).toFixed(3);
				answerDiv.innerHTML = "<h2>" + distance + " miles is equal to " + converted + " kilometers.</h2>";
			}else if(convertType === "kilometers"){
				const converted = (distance * 0.621371).toFixed(3);
				answerDiv.innerHTML = "<h2>" + distance + " kilometers is equal to " + converted + " miles.</h2>";
			}
		}else{
			answerDiv.innerHTML = "<h2>Please enter a number.</h2>";
		}
	});
})();