// For text change in header (h2)
var text = ["am passionate in the area of AI, including Deep and Reinforcement Learning.", 
			"am a beginner in web developing.",
			"am interested in exploring the intersections of technology and other fields.",  
			"am an Applied Mathematics student at the University of Waterloo."];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 3000);


function change() {
	var i = 0;
	elem.innerHTML = text[counter];

	counter++;
	if(counter >= text.length) {
		counter = 0;
	}
}