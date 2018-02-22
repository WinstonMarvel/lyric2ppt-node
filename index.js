
//TO DO

// Intitialize stuff


// Launch Request to get HTML file
	// Traverse using cheerio
	//	Store data in json object

// Create PPT
	// Create slide
	// Add layer/text whatever
	// set font sizes etc

// Save and serve

//Phase 2

// Create static template to recieve user input
	// Create front-end
	// Read the post request parameters
	// Fix urls : www/http/https -> continue to launch request	

//Perfect
	// Handle Errors
	// Detect 404 link
	// Ignore error files and prepare ppt without blocking
	// Auto detect when paragraph is too long, chop and append to next slide


const app = require("express")();
const request = require("request");
const lyricExtractor = require("./extractors.js");
const cheerio = require("cheerio");

app.get("/",function(req,res){  //Get post request and store urls in variable url
	console.log("hello world");
	res.send("<h2>test</h2>");
});

app.listen(80);

var json = {}; 
//Store extracted stuff in following format
	// song list -array
		//title
		//paras - array of paragraphs in song

//Placeholder values for testing
var url = ["https://www.azlyrics.com/lyrics/mercyme/lordiliftyournameonhigh.html", "https://www.azlyrics.com/lyrics/paulbaloche/becauseofyourlove.html"];



foreach(){ //Execute request here for each url

	request(url[0], function(error, response, html){
			lyricExtractor.azlyrics();
	});

}








