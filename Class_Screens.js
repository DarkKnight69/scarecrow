//Formatting Lines so that they are not in a Single Line
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
	return clearLines;
}


class Screen
{	
	//constructor(lines, gifs)
	constructor(lines)
	{
		//Loop Through All the Lines and put all the clearLines in this.screen_lines.
		this.screens_lines = [];
		this.getScreenLines();
		print("Holla");
		//this.screens_gifs = imgs; 
	}
	//Initializes screen_Lines
	getScreenLines()
	{
		var z = [];
		for(var i = 0; i<lines.length; i++)
		{
			var x = formatLines(lines[i]);
			append(z, x);
		}
		this.screens_lines = z;
		print(this.screens_lines);
	}
	
	showScreenLines(i)
	{
		background(0);
		stroke(255);
		strokeWeight(1);
		fill(255);
		textSize(30);
		var z = this.screens_lines[i];
		for(var x=0; x < z.length; x++)
			text(z[x],100,height/2+(30*x));

	}
	
}