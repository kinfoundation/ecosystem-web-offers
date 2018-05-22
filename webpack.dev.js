const merge = require('webpack-merge');
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "source-map",
	devServer: {
		host: "0.0.0.0",
		overlay: true,
	},
});
