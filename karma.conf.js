module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],

    files: [
      { pattern: 'test-context.js', watched: false }
    ],

    frameworks: ['mocha'],

    reporters: ['mocha'],

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-chrome-launcher'
    ],

    preprocessors: {
      'test-context.js': ['webpack']
    },

    singleRun: true,

    webpack: {
      module: {
        loaders: [
          { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }
         ]
      },

      watch: false
    },

    webpackServer: {
      noInfo: true
    }
  });
};
