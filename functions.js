
function getTheLines()
{
	var i =0;
	lines[0] = "";
	for(var a in poem)
	{
		if(poem[a]=='.'||poem[a]=='!')
		{
			i++;
			lines[i] = "";
		}
		else
		{
		//	x = new Array(poem[a]);
			lines[i] = concat(lines[i],poem[a]);
		}
	}
	print(lines);
	startScreening();
	/*
	for(i = 0; i<lines.length; i++)
	{
		print(lines[i]);
	}
	*/
	/*
	stroke(255);
	strokeWeight(1);
	fill(255);
	textSize(30);
	
	for(i=0; i < lines.length; i++)
		text(lines[i],100,height/2+(30*i));
	*/
}

//makes the Screen Object and Starts Screening
function startScreening()
{
	screen = new Screen(lines);
}


function Screens()
{

}
/*

// This funciton will be used in Class_Screens
function formatLines(lines)
{
	var i = 0;
	clearLines = []
	clearLines[0] = ""
	for(var a = 0; a<lines.length; a++)
	{
		if((lines[a]==','||lines[a]==' ')&&(a>10*(i+1)))
		{
			i++;
			clearLines[i] = "";
		}
		else
			clearLines[i] = concat(clearLines[i], lines[a]);
	}
	stroke(255);
	strokeWeight(1);
	fill(255);
	textSize(30);
	
	for(i=0; i < clearLines.length; i++)
		text(clearLines[i],100,height/2+(30*i));
}
*/