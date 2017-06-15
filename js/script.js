 var $main_header = $('#main-header');

 // console.log($main_header);

$('.btn-info').click(function(){
	$($main_header).html('I tricked you!');
	$('#sub-header').html('There is no stuff');
}); 
$('#random-gif-btn').click(function(){
	$.get("https://api.gfycat.com/v1/gfycats/trending", function(data){
  	console.log(data);
	var img = '<img src="' + data.gfycats[9].gifUrl +'">'
  	//console.log(img);
  	$('#random-gif-container').html(img);  	
	});
});
// $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho", function(data){
//   console.log(data);
// });
//http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=r
//var img = '<img src="' + data.data.fixed_height_downsampled_url +'">'
