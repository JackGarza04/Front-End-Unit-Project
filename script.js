$(document).ready(function() {
	//Create references to the modal
	var modal = document.getElementById("myModal");
	//Create references to all images
	var images = document.getElementsByClassName("myImages");
	//The image in the modal
	var modalImg = document.getElementById("img01");
	//The caption in the modal
	var captionText = document.getElementById("caption");

	// Go through all of the images with custom class
	for (var i = 0; i < images.length; i++) 
	{
		var img = images[i];
		img.onclick = function(evt) {
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}
	}

	var span = document.getElementsByClassName("close")[0];

	span.onclick = function() {
	  modal.style.display = "none";
	}	
	
	//Scroll back to top button w/ relevant animation
	var btn = $("#toTop");

	$(window).scroll(function() {
		if ($(window).scrollTop() >= 150) {
			btn.addClass("show");
		} 
		else {
			btn.removeClass("show");
		}
	});

	btn.on("click", function(e) {
		e.preventDefault();
		$("html, body").animate({scrollTop:0}, "300");
	});
});