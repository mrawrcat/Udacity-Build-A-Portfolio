//  var $main_header = $('#main-header');

//  console.log($main_header);

// $('.btn-info').click(function(){
// 	$($main_header).html('I tricked you!');
// 	$('#sub-header').html('There is no stuff');
// }); 
$('#random-gif-btn').click(function(){
	$.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=r", function(data){
  	console.log(data);
	var img = '<img src="' + data.data.image_url +'">'
  	//console.log(img);
  	$('#random-gif-container').html(img);  	
	});
});
// $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho", function(data){
//   console.log(data);
// });