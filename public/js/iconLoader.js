$(function(){

  function loadfail(){
    console.log("Error: Failed to load file!");
  }; //end of LOADFAIL

  function parse(data){

  	for (i=0; i < data.length; i++){
  		var imageURL = data[i];

  		//Clips File Path to extract filename
  		var iconName = imageURL.slice(6);

  		//Append Icon and Name to DOM
  		$('.icons').append(
  			'<div><img src=" ' + imageURL + ' "><p>' + iconName+ '</p></div>'
  		      ); 
  	};

  };//end of PARSE Function

  $.ajax({
    type: 'GET',
    url: 'svg.json',    // name of file with our data
    dataType: 'json',    // type of file we will be reading
    success: parse,// name of function to call when done reading file
    error: loadfail     // name of function to call when failed to read
    });
});