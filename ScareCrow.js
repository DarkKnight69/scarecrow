/*
Works To Be Done
1. Importing Images
2. Making things Interactive
Works Done
1. Importing Lines
2. Start Button added to Start the Slides.
3. parsed Lines for each screen.
4. Next Button will increase the counter and corresponding to counter value the Lines and Images will be displayed
5. Back Button will decrease the counter and corresponding to counter value the Lines and Images will be displayed
*/
var screen;// object of Screen Class
var lines = [];
var poem ="Scarecrow, Scarecrow, turn around.Scarecrow, Scarecrow, touch the ground.Stand up tall and blink your eyes.Raise your hands up to the sky.Clap your hands, then tap your knees.Turn around and tap your feet.Scarecrow, Scarecrow, touch your toes.Scarecrow, Scarecrow, tap your nose.Swing your arms so very slow.Now real fast to scare the crows!Touch our head, jump up and down.Now sit down without a sound."; 
var start;
var next;
var back;
var screenCounter = 0;
function setup()
{
	//Creating Canvas
	canvas1 = createCanvas(500,500);
	canvas1.background(0);
	startScreen();
	// Declaring the Buttons
	start = createButton("Start ");
	start.position(450,280);
	next = createButton("Next ");
	next.position(450,310);
	back = createButton("Back");
	back.position(450,340);
	// Attaching Event Listeners to the Buttons
	start.mouseClicked(getTheLines);
	next.mouseClicked(incrementCounter);
	back.mouseClicked(decrementCounter);
	//canvas2 = createCanvas(100,100);
	//canvas1.background(255,0,0);
	//formatLines(lines[1]);
}

function incrementCounter()
{
	screenCounter++;
	displayScreen();
}
function decrementCounter()
{
	screenCounter--;
	displayScreen();
}
//This Funciotn is invoked if Next/Back is pressed 
//through incrementCounter/decrementCounter
function displayScreen()
{
	if(screenCounter>=screen.screens_lines.length)
	{
		stroke(255);
		strokeWeight(1);
		fill(255);
		textSize(30);
		text("Poem Ends", 100,height/2);
		screenCounter--;			
	}
	else if(screenCounter<0)
	{
		startScreen();
		screenCounter++;
	}
	else
		screen.showScreenLines(screenCounter);

}
function startScreen()
{
	background(0);
	stroke(255);
	strokeWeight(1);
	fill(255);
	textSize(30);
	var x = "ScarYCrows";
	text(x, 100, height/2);
}
function draw()
{
	
		
}



/*
Scarecrow, Scarecrow, turn around.
Scarecrow, Scarecrow, touch the ground.
Stand up tall and blink your eyes.
Raise your hands up to the sky.
Clap your hands, then tap your knees.
Turn around and tap your feet.

Scarecrow, Scarecrow, touch your toes.
Scarecrow, Scarecrow, tap your nose.
Swing your arms so very slow,
Now real fast to scare the crows!
Touch our head, jump up and down.
Now sit down without a sound.
*/