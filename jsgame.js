// Player name 
var User = "User"; 
var Computer = "Computer"; 

// Function to roll the dice 
function rollTheDice() { 
	setTimeout(function () { 
        // Generating raondom numbers for the dice
		var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
		var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

		document.querySelector(".img1").setAttribute("src", 
			"dice" + randomNumber1 + ".png"); 

		document.querySelector(".img2").setAttribute("src", 
			"dice" + randomNumber2 + ".png"); 

		if (randomNumber1 === randomNumber2) { 
			document.querySelector("h1").innerHTML = "Draw!"; 
		} 

		else if (randomNumber1 < randomNumber2) { 
			document.querySelector("h1").innerHTML 
							= (Computer + " WINS!"); 
		} 

		else { 
			document.querySelector("h1").innerHTML 
							= (User + " WINS!"); 
		} 
	}, 500); 
} 
