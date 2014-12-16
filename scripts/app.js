var CANVAS = (function ($) {
	var canvas = {};
	var ctx = {};

	function canvas_redraw () {
		// All this math is not good. Needs working on...

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#aaa";
		ctx.fillRect(0, 0, $("#area").width(), $("#area").height());

		for (var i = 3; i >= 0; i--) {
			var width = $("#vert_1_size").val();
			var distance = $("#vert_1_distance").val();
			ctx.fillStyle = "black";
			ctx.fillRect(0, (i * distance) + (width * i), 100, width);

			width = $("#horiz_1_size").val();
			distance = $("#horiz_1_distance").val();
			ctx.fillStyle = "white";
			ctx.fillRect((i * distance) + (width * i), 0, width, 100);
		};
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