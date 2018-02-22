const cheerio = require("cheerio");

function extract(){
	console.log("detecting and executing");
}

function azlyricsExtractor(){
	console.log("azlyrics");
	// var x = $("br+div")[0].childNodes;
	// var j;
	// for(var i = 0; i<x.length; i++){
	// 	if(x[i].nodeType==8){
	// 		console.log(x[i].nodeValue);
	// 		var j = $(x[i]);
	// 		console.log(j.parent().text());
	// 	}
	// }
	console.log($("h2").text());

}

function lyricsmodeExtractor(){
	console.log("azlyrics");
}



module.exports.extract = extract;