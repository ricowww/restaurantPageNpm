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
        clean: true,
        assetModuleFilename: '[name][ext]',

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
        },
        {
            test:/\.js$/,   //regex for .js files
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
        {
            test:/\.(png|svg|jpg|jpeg|gif)$/i, 
            type: 'asset/resource'
         },
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
