var utils = utils || {};
utils.ColorUtils = {
	decToHex: function(dec){
		return dec.toString(16);
	},
	hexToRgb: function(hex){
		return {r: (hex & 0xFF0000) >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
	},
	hexToCanvasRgb: function(hex) {
		var rgb = utils.ColorUtils.hexToRgb(hex);
		return "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")";
	},
	hexToCanvasRgba: function(hex, alpha) {
		var rgb = utils.ColorUtils.hexToRgb(hex);
		return "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + alpha + ")";
	}
};