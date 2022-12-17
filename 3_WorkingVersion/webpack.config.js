const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry:{
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
    },
    devServer:{
        static:{
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,//port for frontend
        open: true,  //open browser
        hot: true, //reloading
        compress: true, //gzip compression
        historyApiFallback: true,
    },
    module: {
        rules: [ //array of rules
        {
            test:/\.css$/,   //regex for .css files
            use: [ //array of loaders for .css
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Snack Shack App', //html title
            filename: 'index.html', //filename
            template: 'src/template.html', //path to template
        }),
    ],
}
