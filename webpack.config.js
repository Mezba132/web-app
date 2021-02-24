const path = require('path');

module.exports = {
    mode : 'development',
    entry : './src/js/index.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'public/')
    },

    resolve: {
        extensions: ['.js', '.jsx']
      },

    module : {
        rules : [{
            test : /\.(js|jsx)$/,
            exclude : /node_modules/,
            loader : 'babel-loader'
        },
        {
            test : /\.css$/,
            use : ['style-loader', 'css-loader']
        }
    ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public/'),
        compress: true,
        port: 3000
    }
}