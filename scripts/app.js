var CANVAS = (function ($, undefined) {
	var canvas = {};
	var ctx = {};

	function canvas_redraw () {
		// Reset canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#aaa";
		ctx.fillRect(0, 0, $("#area").width(), $("#area").height());

		// Draw lines. Only does 4 each right now. Should update to be dynamic based off size and spacing.
		for (var i = 3; i >= 0; i--) {
			var width = $("#vert_1_size").val();
			var distance = $("#vert_1_distance").val();
			ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
			ctx.fillRect(0, (i * distance) + (width * i), 100, width);

			width = $("#horiz_1_size").val();
			distance = $("#horiz_1_distance").val();
			ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
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