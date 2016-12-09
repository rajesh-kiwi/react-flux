var webpack = require('webpack')

module.exports = {
    entry: './client/js/app.js'
    , output: {
        path: './client'
        , filename: 'bundle.js',
        library: 'History',
        libraryTarget: 'umd'
    }
    , resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {}
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/
                , loader: 'babel'
                , exclude: /node_modules/
                , query: {
                    cacheDirectory: true
                    , presets: ['react', 'es2015']
                }
            }
        ]
    }
}