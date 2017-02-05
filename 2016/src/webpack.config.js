module.exports = {
    entry: "./ghosts.jsx",
    output: {
        path: __dirname,
        filename: "ghosted.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: {presets:["es2015","react"]}},
            { test: /\.jsx$/, loader: "babel-loader", query: {presets:["es2015","react"]}}
        ]
    }
};