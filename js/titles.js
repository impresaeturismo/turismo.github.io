	var map = document.getElementById('map');
	var spazio = map.getContext("2d");

function gradientRedTitle(titolo){
	// CREA UN TITOLO SU SFONDO ROSSO CON GRADIENTE
	var gradient = spazio.createLinearGradient(0,0,500,0);
	gradient.addColorStop(0,"red");
	gradient.addColorStop(1,"white");
	spazio.fillStyle = gradient;
	spazio.fillRect (0,0,500,50);
	spazio.font = "24px Arial";
	spazio.strokeText(titolo,10,25);}

// Esempio
//gradientRedTitle("Capitolo 1");

function ellipseRed(scritta){
	// scritta dentro ellisse rosso
	svg = "<svg height=\"110\" width=\"500\"> <ellipse cx=\"185\" cy=\"70\" rx=\"185\" ry=\"35\" fill=\"red\" /> <text fill=\"white\" font-size=\"54\" font-family=\"Verdana\" x=\"50\" y=\"86\">"+scritta+"</text> </svg>";
	document.write(svg)
}
// ellipseRed("Scritta")