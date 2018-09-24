//path is the built module exist in node-path
const path = require("path");
//entry --> output
//console.log(path.join(__dirname, "public")); // --> where is your directory?
module.exports = {
  //where it should start?
  entry: "./src/app.js",
  output: {
    //where you want to output?
    path: path.join(__dirname, "public"),
    //what is the file should be named?
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        //loader teachs webpack how to read the files, test shows where it should read, exclude tell webpack don't need to read babel in node-module. Whenever this part run it will check babelrc to know what presets to use. Use is used to provide an array of loaders
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  //let us know where we can see the error from our application, not in bundle.js
  devtool: "cheap-module-eval-source-map",
  //serve as live-server and webpack as same time, but it need to know where to look, so we use contentBase to show our path. Read DOCUMENTATION
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};
