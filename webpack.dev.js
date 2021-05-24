module.exports = {
  mode: 'development',
  entry: {
    index: [
      './source/js/scroll.js',
      './source/js/slider.js',
    ],
  },
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
  },
};
