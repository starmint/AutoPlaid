var CANVAS = (function ($) {
	var canvas = {};
	var ctx = {};

	function init_canvas () {
		canvas = document.getElementById("area");
		ctx = canvas.getContext("2d");
		ctx.fillStyle = "green";
		ctx.fillRect(10,10,100,100);
	}

	return {
		initialize: function () {
			init_canvas();
		}
	};
})(jQuery);

(function ($, cv, undefined) {
	$(document).ready(function() {
		initialize();

		function initialize () {
			// Initialize the canvas
			cv.initialize();
		}
	});
})(jQuery, CANVAS);