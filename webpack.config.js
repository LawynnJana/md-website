const path = require('path')

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    devServer: {
      contentBase: "./src",
    }
};
