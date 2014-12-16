var CANVAS = (function ($) {
	var canvas = {};
	var ctx = {};

	function canvas_redraw () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "green";
		ctx.fillRect(10,10,$("#horiz_1_size").val(),100);
		ctx.fillStyle = "red";
		ctx.fillRect(10,10,100,$("#vert_1_size").val());
	}

	function init_form () {
		$("input").change(function (event) {
			canvas_redraw();
		});
	}

	function init_canvas () {
		canvas = document.getElementById("area");
		ctx = canvas.getContext("2d");
		canvas_redraw();
	}

	return {
		initialize: function () {
			init_canvas();
			init_form();
		}
	};
})(jQuery);


//This function gets called automatically on page load. 
(function ($, cv, undefined) {
	$(document).ready(function() {
		initialize();

		function initialize () {
			// Initialize the canvas
			cv.initialize();
		}
	});
})(jQuery, CANVAS);